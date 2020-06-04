#-*-coding:utf-8-*-
#-*-coding:utf-8-*-
#-*-coding:utf-8-*-
#-*-coding:utf-8-*-
# from urllib.request import urlopen
# import urllib.request
import smtplib
import re
import mysql.connector
import cv2
import numpy as np
import time, requests
from concurrent.futures import ThreadPoolExecutor
from email.mime.text import MIMEText
from email.header import Header
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from PIL import Image, ImageEnhance
from selenium.webdriver import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
from io import BytesIO


username = '17737102596'
mail_host = "smtp.163.com"  # 设置服务器
mail_user = "myperi2728@163.com"  # 用户名
mail_pass = "woaixiaoruan0913"  # 口令,QQ邮箱是输入授权码，在qq邮箱设置 里用验证过的手机发送短信获得，不含空格
sender = 'myperi2728@163.com'
receivers = ['1204628226@qq.com']  # 接收邮件，可设置为你的QQ邮箱或者其他邮箱
smtpObj = smtplib.SMTP_SSL(mail_host, 465)
smtpObj.login(mail_user, mail_pass)


#
#
#
#
#
#


option = webdriver.ChromeOptions()
# prefs = {"profile.managed_default_content_settings.images": 2}
# option.add_experimental_option("prefs", prefs)
# option.add_argument("blink-settings=imagesEnabled=false")
option.add_argument("--proxy-servers=https://125.123.154.6:3000")
option.add_experimental_option('excludeSwitches', ['enable-automation'])
option.add_argument('headless')
option.add_argument('no-sandbox')
option.add_argument('disable-dev-shm-usage')
option.add_argument('--disable-gpu')
option.add_argument('-lang=zh-cn')
option.add_argument('–start-maximized')

class CrackSlider():
    def __init__(self):
        self.url = 'https://buff.163.com/market/?game=csgo#page_num=1&sort_by=price.asc&min_price=1&max_price=200'
        self.driver = webdriver.Chrome(executable_path=r"C:\more\chromedriver\chromedriver.exe", options=option)
        self.wait = WebDriverWait(self.driver, 20)
        self.zoom = 0.956
        self.num=1


    def open(self):
        self.driver.get(self.url)

    def first(self):
        self.driver.switch_to.frame(self.driver.find_element_by_tag_name("iframe"))
        time.sleep(5)
        self.driver.find_element_by_class_name('tab0').click()
        time.sleep(5)

    def get_picture(self):
        # target = browser.find_element_by_class_name("yidun_bg-img")
        # template = browser.find_element_by_class_name("yidun_jigsaw")
        target = self.wait.until(EC.presence_of_element_located((By.CLASS_NAME, 'yidun_bg-img')))
        template = self.wait.until(EC.presence_of_element_located((By.CLASS_NAME, 'yidun_jigsaw')))
        target_link = target.get_attribute('src')
        template_link = template.get_attribute('src')
        target_img = Image.open(BytesIO(requests.get(target_link).content))
        template_img = Image.open(BytesIO(requests.get(template_link).content))
        size_orign = target.size
        target_img.save('target.jpg')
        template_img.save('template.png')
        local_img = Image.open('target.jpg')
        size_loc = local_img.size  #获取下载好的图片的大小（以像素为单位）
        # self.zoom = 320 / int(size_loc[0]) # 网页上的图片为320像素
        # print(self.zoom)
        # self.driver.close()

    # 识别缺口位置
    def match(self, target, template):
        img_rgb = cv2.imread(target)
        img_gray = cv2.cvtColor(img_rgb, cv2.COLOR_BGR2GRAY)
        template = cv2.imread(template, 0)
        run = 1
        w, h = template.shape[::-1]
        # print(w, h)
        res = cv2.matchTemplate(img_gray, template, cv2.TM_CCOEFF_NORMED)
        run = 1

        # 使用二分法查找阈值的精确值
        L = 0
        R = 1
        while run < 20:
            run += 1
            threshold = (R + L) / 2
            # print(threshold)
            if threshold < 0:
                print('Error')
                return None
            loc = np.where(res >= threshold)
            # print(len(loc[1]))
            if len(loc[1]) > 1:
                L += (R - L) / 2
            elif len(loc[1]) == 1:
                # print('目标区域起点x坐标为：%d' % loc[1][0])
                break
            elif len(loc[1]) < 1:
                R -= (R - L) / 2
        return loc[1][0]

    # 计算移动轨迹
    def get_tracks(self, distance):
        # print(distance)
        distance += 20
        v = 0
        t = 0.2
        forward_tracks = []
        current = 0
        mid = distance * 10 / 5  #减速阀值
        while current < distance:
            if current < mid:
                a = 2  #加速度为+2
            else:
                a = -3  #加速度-3
            s  = v * t + 0.5 * a * (t ** 2)
            v = v + a * t
            current += s
            forward_tracks.append(round(s))

        back_tracks = [-3, -3, -2, -2, -2, -2, -2, -1, -1, -1]
        return {'forward_tracks': forward_tracks, 'back_tracks': back_tracks}

    #模拟滑块拼合的过程
    def crack_slider(self):
        target = 'target.jpg'
        template = 'template.png'
        self.get_picture()
        distance = self.match(target, template)
        tracks = self.get_tracks((distance + 7.0) * self.zoom)  # 对位移的缩放计算

        slider = self.wait.until(EC.element_to_be_clickable((By.CLASS_NAME, 'yidun_slider')))
        ActionChains(self.driver).click_and_hold(slider).perform()

        for track in tracks['forward_tracks']:
            ActionChains(self.driver).move_by_offset(xoffset=track, yoffset=0).perform()

        time.sleep(0.5)
        for back_tracks in tracks['back_tracks']:
            ActionChains(self.driver).move_by_offset(xoffset=back_tracks, yoffset=0).perform()

        ActionChains(self.driver).move_by_offset(xoffset=-4, yoffset=0).perform()
        ActionChains(self.driver).move_by_offset(xoffset=4, yoffset=0).perform()
        time.sleep(0.5)

        ActionChains(self.driver).release().perform()
        try:
            failure = WebDriverWait(self.driver, 5).until(
                EC.text_to_be_present_in_element((By.CLASS_NAME, 'yidun_tips__text'), '向右拖动滑块填充拼图' ))
            print(failure)
        except:
            print("登陆成功")
            return None

        if (failure):
            self.crack_slider()




def loginGet():
    # 数据库连接
    db = mysql.connector.connect(host="localhost", user="root", passwd="xiaoruan0913", database="buff")
    cursor = db.cursor()
    print('Hello 程序开始...')
    cs = CrackSlider()
    cs.open()
    cs.first()
    print('正在登陆')
    elem = cs.driver.find_element_by_id("phoneipt")  # u
    elem.send_keys(username)
    time.sleep(1)
    elem2 = cs.driver.find_element_by_class_name("j-inputtext")  # p
    elem2.send_keys(passwd)
    time.sleep(1)
    target = 'target.jpg'
    template = 'template.png'
    cs.get_picture()
    distance = cs.match(target, template)
    tracks = cs.get_tracks((distance + 7) * cs.zoom)  # 对位移的缩放计算
    cs.crack_slider()
    elem3 = cs.driver.find_element_by_id("submitBtn")  # .submit()
    elem3.click()
    time.sleep(5)
    cs.driver.switch_to.default_content()
    # 登陆结束

    cs.driver.find_element_by_xpath('//*[@id="j_market_card"]/div[2]/ul/li[13]/a').click()
    time.sleep(5)
    cs.driver.find_element_by_xpath('//*[@id="j_market_card"]/div[2]/ul/li[13]/a').click()
    time.sleep(5)
    page = cs.driver.find_elements_by_class_name('page-link')
    page_source = int(page[-2].text) - 1
    print(page_source)
    for i in range(page_source):
        soup = BeautifulSoup(cs.driver.page_source, 'html5lib')
        soup2 = soup.find(id='j_list_card').find_all("a")
        for j in soup2:
            if len(j) == 1:
                cursor.execute("INSERT INTO 1到200 (name, url) values (%s, %s)", [j.get("title"), 'https://buff.163.com'+j.get("href")])
        print('---------------------------------------------------')
        print('当前正在存储第' + str(i + 1) + '页的数据0.0')
        cs.driver.find_element_by_xpath('//*[@id="j_market_card"]/div[2]/ul/li[1]/a').click()
        time.sleep(8)
        db.commit()
    cs.driver.close()
    cursor.close()
    db.close()
    print('数据保存完成')







    # #         cursor.execute("INSERT INTO 1到200 (name, url) values (%s, %s)", [i.get("title"), 'https://buff.163.com'+i.get("href")])
    #     browser.close()
    # db.commit()
    # db.close()
    # print(setting)



def getmoney(url):
    browser = webdriver.Chrome(executable_path=r"C:\more\chromedriver\chromedriver.exe", options=option)
    browser.get(url)
    maijia = browser.find_elements_by_class_name('j_shoptip_handler')
    price = browser.find_elements_by_class_name("f_Strong")
    # print(price[1].text)
    name = browser.find_element_by_tag_name("h1").text
    URL=browser.current_url
    L = []
    L.append(name)
    # print(URL)
    Solve(L, name, maijia, price,URL)
    browser.close()

settings=[]
def All_Url():
    db = mysql.connector.connect(host="localhost", user="root", passwd="xiaoruan0913", database="buff")
    cursor = db.cursor()
    cursor.execute("SELECT url FROM 1到200 ")
    results = cursor.fetchall()
    print(len(results))
    for i in results:
        # print(i[0])
        settings.append(i[0])
    print(settings)
    cursor.close()
    db.close()


def MM(setting):
    getmoney(setting)
    # p.join()
    smtpObj.quit()

def Solve(L,name,maijia,price,URL):
    try:
        print(name)
        for i, j in zip(range(len(maijia)), range(len(price))):
            two = price[j + 1].text
            Price = re.findall(r'[0-9\.]+', two)
            L.append(float(Price[0]))
        L.append(URL)
        # print(L)
        money = L[1] * 1.025 + 1.5
        duibi = L[2]
        if money < duibi and (L[3]-L[1])<10:
            SendEmail(L, name)
    except:
        print("0.0")


def SendEmail(L,name,):
    res = [str(x) for x in L]
    result = "-----".join(res)
    message = MIMEText(result, 'plain', 'utf-8')
    message['From'] = "{}".format(sender)
    message['To'] = ",".join(receivers)
    subject = name
    message['Subject'] = Header(subject, 'utf-8')
    smtpObj.sendmail(sender, receivers, message.as_string())
    print("发送邮件！！！！" + name)



if __name__ == '__main__':
    def long():
        time.sleep(5)
        while True:
            with ThreadPoolExecutor(max_workers=5) as pool:
                pool.map(MM, settings)
                time.sleep(5)

    try:
        # loginGet()
        All_Url()
        long()
    except:
        print("程序出错了，但问题不大")
    finally:
        long()

#-*-coding:utf-8-*-
