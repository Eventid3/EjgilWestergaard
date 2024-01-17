from os import listdir
from os.path import isfile, join

prePath = "public/"
thumbPath = "img/Skulpturer/thumbnails"
imgPath = "img/Skulpturer"

thumbnails = [f for f in listdir(prePath + thumbPath) if isfile(join(prePath + thumbPath, f))]
imageDict = {}

for t in thumbnails:
    imgnum = t[0:3]
    imageDict[imgnum] = {"thumb" : thumbPath + "/" + t, "images": [str(imgPath + '/' + f) for f in listdir(prePath + imgPath) if f.startswith(t[0:3])], "name" : "", "info" : ""}

# with open("thumbnaillist.txt",mode='w') as file:
#     for img in thumbnails:
#         file.write(f'"img/Skulpturer/thumbnails/{img}",\n')
currentImg = ""

with open("info.txt", encoding="utf-8") as file:
    for line in file:
        if line.startswith("Navn: "):
            imageDict[currentImg]["name"] = line[6:-1]
            # print(currentImg, line[6:-1])
        elif line.startswith("Info: "):
            imageDict[currentImg]["info"] = line[6:-1]
            # print(currentImg, line[6:-1])
        else: 
            currentImg = str(line[:-1])


with open("thumbnaillist.txt",mode='w',encoding="utf-8") as file:
    for k,v in imageDict.items():
        file.write(f"'{k}' : {v},\n")