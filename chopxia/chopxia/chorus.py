import subprocess
#subprocess.check_output(['ls','-l']) #all that is technically needed...
#print subprocess.check_output(['ls','-l'])
times = [
    1,29,7, #1
    1,32,72, #2
    1,35,5, #3
    1,38,33, #4
    1,41,33, #5
    1,44,254, #6
    1,48,615, #7
#    1,49,9, #8
    1,58,542 #9
]

timeStrings = []

for x in range(0, len(times)/3):
    minutes = times[x*3]
    seconds = times[(x*3)+1]
    millis = times[(x*3)+2]
    m = str(millis).ljust(3, '0')
    timeStrings.append("00:%d:%d+%s"%(minutes,seconds,m))
#    print("%d:%d:%d"%(minutes,seconds,millis))

print timeStrings
    


for x in range(0, len(timeStrings) - 2):
#    print(str(x+1) + ":" + str(t) + ' ' + str(tp))
    s = timeStrings[x]
    sp = timeStrings[x+2]
    tt = s + "-" + sp
    print tt
    subprocess.check_output(['mp3cut', '-o', 'chorus' + str(x + 1)+'.mp3', '-t', tt, 'ninxia.mp3'])
#    print(['mp3cut', '-o', 'verse' + str(x + 1)+'.mp3', '-t', s + "-" + sp, 'ninxia.mp3'])
#    subprocess.check_output(['mp3cut', '-o', 'verse' + str(x + 1)+'.mp3', '-t', tt, 'ninxia.mp3'])
    # seconds = int(t) % 60
    # millis = int((t - seconds) * 1000)
    # strsecs = str(seconds)
    # strmillis = str(millis)
    # t = '00:00:0'+strsecs+'+' + strmillis + '-00:00:010+000'
    # print(t)
#print subprocess.check_output(['mp3cut', '-o', 'out2.mp3', '-t', '00:00:05+000-00:00:010+000', 'ninxia.mp3'])
