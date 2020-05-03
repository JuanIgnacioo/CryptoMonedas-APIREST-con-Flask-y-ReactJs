from pymongo import MongoClient

def inicializar_base1():    
    client = MongoClient(host='db_crypto', port = 27017)
    data_base = client.get_database('crypto_coins')
       
    #print(aux)
    return data_base  
  

#inicializar_base1()

def inicializar_base2():    
    client = MongoClient(host='db2_crypto2', port = 27017)
    data_base = client.get_database('crypto_coins')
    print('ok')
    return data_base   