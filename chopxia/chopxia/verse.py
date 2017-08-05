import subprocess
#subprocess.check_output(['ls','-l']) #all that is technically needed...
#print subprocess.check_output(['ls','-l'])
times = [
    23,
    26,
    29,
    31.65,
    35.2,
    38.5,
    42.01,
    50]

def conv(t):
    seconds = int(t) % 60
    millis = int((t - seconds) * 1000)
    strsecs = str(seconds)
    strmillis = str(millis)
    return '00:00:0'+strsecs+'+' + strmillis
    

for x in range(0, len(times) - 2):
    t = times[x]
    tp = times[x+2]
    tt = conv(t) + '-' + conv(tp)
    print(str(x+1) + ":" + str(t) + ' ' + str(tp))
    subprocess.check_output(['mp3cut', '-o', 'verse' + str(x + 1)+'.mp3', '-t', tt, 'ninxia.mp3'])
    # seconds = int(t) % 60
    # millis = int((t - seconds) * 1000)
    # strsecs = str(seconds)
    # strmillis = str(millis)
    # t = '00:00:0'+strsecs+'+' + strmillis + '-00:00:010+000'
    # print(t)
#print subprocess.check_output(['mp3cut', '-o', 'out2.mp3', '-t', '00:00:05+000-00:00:010+000', 'ninxia.mp3'])
