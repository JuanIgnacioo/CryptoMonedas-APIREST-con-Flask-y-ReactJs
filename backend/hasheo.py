import hashlib

def hashear(x):
    x = str (x)
    aux = hashlib.sha512(x.encode())
    aux2 = str(aux.hexdigest())
    return aux2

#----------------------------------------
def hasheo_base (db1_cryp):
    aux_cryp = []
    for i in db1_cryp:
        item = {
            "cmc_rank":i["cmc_rank"],
            "hash":hashear(i)

        }

        aux_cryp.append(item)
    
    return aux_cryp