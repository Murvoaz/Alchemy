import eel
from random import randint

eel.init('web')

# Exposing the random_python function to javascript
@eel.expose	
def melange(src1,src2,src3):
        src1 = src1[27:]
        src2 = src2[27:]
        src3 = src3[27:]
        melange = [src1,src2,src3]
        melange.sort()
        recette = melange[0]+melange[1]+melange[2]+"\n"
        filin = open("recette.txt", "r")
        lignes = filin.readlines()
        verif = 0
        element = ""
        for ligne in lignes:
                if(verif == 1) :
                        element = ligne
                        element = element.strip('\n')
                        break
                if(ligne == recette):
                        verif = 1
        filin.close()
        return element

# Start the index.html file
eel.start("index.html", port = 7998)
