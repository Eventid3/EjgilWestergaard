
from os import listdir
from os.path import isfile, join

thumbPath = "img/Skulpturer/thumbnails"
imgPath = "img/Skulpturer"

thumbnails = [f for f in listdir(thumbPath) if isfile(join(thumbPath, f))]
imageDict = {}

for t in thumbnails:
    imageDict[t] = [str(imgPath + '/' + f) for f in listdir(imgPath) if f.startswith(t[0:3])]

# with open("thumbnaillist.txt",mode='w') as file:
#     for img in thumbnails:
#         file.write(f'"img/Skulpturer/thumbnails/{img}",\n')

with open("thumbnaillist.txt",mode='w') as file:
    for k,v in imageDict.items():
        file.write(f"'{thumbPath}/{k}' : {v},\n")
