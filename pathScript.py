from os import listdir
from os.path import isfile, join

# prePath = "public/"
# thumbPath = "img/Skulpturer/thumbnails"
# imgPath = "img/Skulpturer"
# infoPath = "textinfo/info.txt"
# outputfile = "thumbnaillist.txt"

def createThumbnailList(prePath, thumbPath, imgPath, infoPath, outputfile):
    thumbnails = [f for f in listdir(prePath + thumbPath) if isfile(join(prePath + thumbPath, f))]
    imageDict = {}

    for t in thumbnails:
        imgnum = t[0:3]
        imageDict[imgnum] = {"thumb" : thumbPath + "/" + t, "images": [str(imgPath + '/' + f) for f in listdir(prePath + imgPath) if f.startswith(t[0:3])], "name" : "", "info" : ""}

    # with open("thumbnaillist.txt",mode='w') as file:
    #     for img in thumbnails:
    #         file.write(f'"img/Skulpturer/thumbnails/{img}",\n')
    currentImg = ""

    with open(infoPath, encoding="utf-8") as file:
        for line in file:
            if line.startswith("Navn: "):
                imageDict[currentImg]["name"] = line[6:-1]
                # print(currentImg, line[6:-1])
            elif line.startswith("Info: "):
                imageDict[currentImg]["info"] = line[6:-1]
                # print(currentImg, line[6:-1])
            else: 
                currentImg = str(line[:-1].strip())


    with open(outputfile,mode='w',encoding="utf-8") as file:
        for k,v in imageDict.items():
            file.write(f"'{k}' : {v},\n")
            
createThumbnailList("public/", "img/Skulpturer i kommunen/thumbnails", "img/Skulpturer i kommunen", "public/img/Skulpturer i kommunen/Info/info.txt", "lemvigthumbnaillist.txt")
createThumbnailList("public/", "img/Skulpturer i haven/thumbnails", "img/Skulpturer i haven", "public/img/Skulpturer i haven/Info/info.txt", "haventhumbnaillist.txt")
createThumbnailList("public/", "img/Skulpturer uden for kommunen/thumbnails", "img/Skulpturer uden for kommunen", "public/img/Skulpturer uden for kommunen/Info/info.txt", "ulemvigthumbnaillist.txt")
createThumbnailList("public/", "img/Foto i værksted/thumbnails", "img/Foto i værksted", "public/img/Foto i værksted/Info/info.txt", "vaerkstedthumbnaillist.txt")
createThumbnailList("public/", "img/Skulpturer på Grunden/thumbnails", "img/Skulpturer på Grunden", "public/img/Skulpturer på Grunden/Info/info.txt", "grundenthumbnaillist.txt")