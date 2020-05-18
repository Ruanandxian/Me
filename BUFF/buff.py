#-*-coding:utf-8-*-
#-*-coding:utf-8-*-
#-*-coding:utf-8-*-
# from urllib.request import urlopen
# import urllib.request
import json

from bs4 import BeautifulSoup
# from tomorrow import threads
# from multiprocessing import Process
# from multiprocessing import Pool
# import threading
import time
import re
import smtplib
import pymysql
from concurrent.futures import ThreadPoolExecutor
from email.mime.text import MIMEText
from email.header import Header
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from sympy import true
from sympy import false

mail_host = "smtp.163.com"  # 设置服务器
mail_user = "myperi2728@163.com"  # 用户名
mail_pass = "woaixiaoruan0913"  # 口令,QQ邮箱是输入授权码，在qq邮箱设置 里用验证过的手机发送短信获得，不含空格
sender = 'myperi2728@163.com'
receivers = ['1204628226@qq.com']  # 接收邮件，可设置为你的QQ邮箱或者其他邮箱
smtpObj = smtplib.SMTP_SSL(mail_host, 465)
smtpObj.login(mail_user, mail_pass)





option = webdriver.ChromeOptions()
prefs = {"profile.managed_default_content_settings.images": 2}
option.add_experimental_option("prefs", prefs)
option.add_argument("blink-settings=imagesEnabled=false")
option.add_argument('headless')
option.add_argument('no-sandbox')
option.add_argument('disable-dev-shm-usage')
option.add_argument('--disable-gpu')
option.add_argument('-lang=zh-cn')

cookies = [
{
    "domain": ".163.com",
    "name": "_ga",
    "path": "/",
    "value": "GA1.2.148504322.1589737675",
},
{
    "domain": ".163.com",
    "name": "_gid",
    "path": "/",
    "value": "GA1.2.1478960741.1589737675",
},
{
    "domain": ".163.com",
    "name": "NTES_YD_SESS",
    "path": "/",
    "value": "w..vN93RC9LoU93YqShO4c_QuEUeyRvDMiN9Xw5MB1Qx68YH69PjrGvpyUXlrtpUwMj2IOYLwB6uwTqukwUqaCOBwlVvLOkl8uk4IR6QRa7GzzXT.P7KZ9mOQASdzyjsDqdipxGyHuPu09Rn5vfVxP7PFpadb.kMH4YgrMfnoRkE5dkoFcDKWEM7Yql.qMO0LfQzV9AqXtF3_W44KkRlnIGv4djIH304_z0ZLS6frLhnl",
},
{
    "domain": ".163.com",
    "name": "P_INFO",
    "path": "/",
    "value": "17737102596|1589804735|1|netease_buff|00&99|hen&1589801899&netease_buff#hen&410200#10#0#0|&0|null|17737102596",
},
{
    "domain": ".163.com",
    "name": "S_INFO",
    "path": "/",
    "value": "1589804735|0|3&80##|17737102596",
},
{
    "domain": "buff.163.com",
    "name": "csrf_token",
    "path": "/",
    "value": "ImUzYzFiYzc0NTA2MjdmNDg0YTFmNmRhY2Q0ZjQ2YjZlYTYwZDBlZWYi.EaQQzw.40vTnvr2vu5ZNIBsMOSeGgooMJg",

},
{
    "domain": "buff.163.com",
    "name": "Device-Id",
    "path": "/",
    "value": "QVdyMgGnxa06yTfdu2AS",
},
{
    "domain": "buff.163.com",
    "name": "game",
    "path": "/",
    "value": "csgo",
},
{
    "domain": "buff.163.com",
    "name": "Locale-Supported",
    "path": "/",
    "value": "zh-Hans",
},
{
    "domain": "buff.163.com",
    "name": "session",
    "value": "1-CXrSQ5aIdnj1j-Fdlf-RdW3a5cnQp0gCMgLjAP_vSd8A2043642232",
}
]

setting=[]
def GetUrl():
    # 数据库连接
    db = pymysql.connect("localhost", "root", "xiaoruan2728", "buff")
    cursor = db.cursor()


    browser = webdriver.Chrome(executable_path=r"C:\more\chromedriver\chromedriver.exe", options=option)
    browser.get('https://buff.163.com/market/?game=csgo#tab=selling&page_num=1')
    for cookie in cookies:
        browser.add_cookie(cookie_dict=cookie)
    page=browser.find_elements_by_class_name('page-link')
    page_source = int(page[-2].text)
    # print(page_source)
    for i in range(page_source):
        browser.get('https://buff.163.com/market/?game=csgo#tab=selling&page_num=' + str(i + 1))
        soup = BeautifulSoup(browser.page_source, 'html5lib')
        soup2 = soup.find(id='j_list_card').find_all("a")
        # page=browser.find_elements_by_class_name('current')
        # print(page[1].text)
        # print(browser.current_url)
        for i in soup2:
            if len(i)==1:
                cursor.execute("INSERT INTO 手枪 (name, url) values (%s, %s)", [i.get("title"), 'https://buff.163.com'+i.get("href")])
        browser.close()
    db.commit()
    db.close()






def getmoney(url):
    browser = webdriver.Chrome(executable_path=r"C:\more\chromedriver\chromedriver.exe", options=option)
    browser.get(url)
    mosun = browser.find_elements_by_class_name("csgo_value")
    # print(mosun[0].text)
    price = browser.find_elements_by_class_name("f_Strong")
    # print(price[1].text)
    name = browser.find_element_by_tag_name("h1").text
    print(name)
    L = []
    L.append(name)
    Solve(L, name, mosun, price)

    browser.close()





def MM(setting):
    getmoney(setting)
    # p.join()
    smtpObj.quit()

def Solve(L,name,mosun,price):
    try:
        for i, j in zip(range(len(mosun)), range(len(price))):
            two = price[j + 1].text
            Price = re.findall(r'[0-9\.]+', two)
            L.append(float(Price[0]))
        money = L[1] * 1.025 + 3
        duibi = L[4]
        if money < duibi:
            SendEmail(L, name)
    except:
        print("继续执行")


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

settings = ['https://buff.163.com/market/goods?goods_id=36346&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=36346&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=779294&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=779294&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=43088&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=43088&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=42889&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=42889&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=774762&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=774762&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=769516&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=769516&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=763264&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=763264&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=759408&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=759408&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=762074&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=762074&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=42434&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=42434&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=39015&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=39015&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=42586&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=42586&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=34671&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=34671&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=762120&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=762120&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=759200&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=759200&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=42555&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=42555&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=39595&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=39595&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=769136&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=769136&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=768380&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=768380&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=39211&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=39211&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=36346&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=36346&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=779294&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=779294&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=43088&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=43088&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=42889&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=42889&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=774762&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=774762&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=769516&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=769516&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=763264&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=763264&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=759408&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=759408&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=762074&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=762074&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=42434&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=42434&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=39015&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=39015&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=42586&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=42586&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=34671&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=34671&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=762120&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=762120&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=759200&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=759200&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=42555&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=42555&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=39595&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=39595&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=769136&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=769136&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=768380&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=768380&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=39211&from=market#tab=selling', 'https://buff.163.com/market/goods?goods_id=39211&from=market#tab=selling']


if __name__ == '__main__':
    def long():
        time.sleep(5)
        while True:
            with ThreadPoolExecutor() as pool:
                pool.map(MM, settings)
                time.sleep(5)


    try:
        # GetUrl()
        long()
    except:
        print("程序出错了，但问题不大")
    finally:
        long()
#-*-coding:utf-8-*-
