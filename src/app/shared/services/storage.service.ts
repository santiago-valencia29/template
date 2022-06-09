import { Injectable } from '@angular/core'
import * as CryptoJS from 'crypto-js'
const SecureStorage = require('secure-web-storage')
const SECRET_KEY =
  '3ccbd91f12cd0dca7f4356bb5d22c22ac3ad647a23059e06a89759cd3d39a63208edcac2338b204382aaf5054fb2217f'

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  public secureStorage = new SecureStorage(localStorage, {
    hash: function hash(key: any) {
      key = CryptoJS.SHA256(key, this.SECRET_KEY)
      console.log(key.toString())
      return key.toString()
    },
    encrypt: function encrypt(data: any) {
      data = CryptoJS.AES.encrypt(data, SECRET_KEY)
      data = data.toString()
      return data
    },
    decrypt: function decrypt(data: any) {
      data = CryptoJS.AES.decrypt(data, SECRET_KEY)
      data = data.toString(CryptoJS.enc.Utf8)
      return data
    }
  })

  decrypt() {
    // let coockie = 'p_H34_JNNJwgpZfpsf0fquNcXJiN0Jc5-5CKEChNSKI'
    // let token =
    //   'U2FsdGVkX19TA2zZN0evrkTmY4R6BGzEz2ViRuNfWU5R/Jey/zPLe4GPFAbjXmG1NmPUCNWqdAQs6AeUYoHAuMPzqUxo0RxsciiB623LR5nDvvct8fDsCVAoN9PJEpiTwUDms+EsD+nl1povyIaTVNcIMHVg8qBQhDkhpgB0+vz9vMfUZI00zR1UIJZelMaN7zXUug4QYvYK+HtGcwmOl6+ZTj2BtaePhpgMzo9pDvs8+bT3Aj+sU5FMu8m599Cu7nL5iG6Ob+dpDF/DDHzF8D1tw+jUWVAoVfr0D61QtA3/d1oDCMlkH/SUxihnh4yPeYBtcStQLbEI0My2SMCozs1zwBDbZIdd6Osy/RXQ36Ed0uC5ysmKxR1cQPPlMyucrfsq3whFnJhOyYyS2l5RKQ8drIPZwUIaidKr/pPbj3+Lh3AskkRO/EJCROvnzvqygBjpL8jrEFTCv60JrJzZYGt7cyNcSAZTHQQzS+v6G2hJ+/CXk6wrLY1UWkRx9XJhTHEGG/PHO+V5GqSFao4PLUMO3Bxh8HRFKVV5Lk/IqxA='
    // let data = CryptoJS.AES.decrypt(coockie, SECRET_KEY)
    // console.log(data.toString(CryptoJS.enc.Utf8))

    let encrypt = CryptoJS.AES.encrypt(
      'This is my secret message',
      'EncryptionKey'
    )
    console.log(encrypt.toString())
    let decrypted = CryptoJS.AES.decrypt(encrypt, 'EncryptionKey')
    console.log(decrypted.toString(CryptoJS.enc.Utf8))
  }
}
