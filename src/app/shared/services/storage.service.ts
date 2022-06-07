import { Injectable } from '@angular/core'
import * as CryptoJS from 'crypto-js'
const SecureStorage = require('secure-web-storage')
const SECRET_KEY = 'C0l0mb1a'

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  public secureStorage = new SecureStorage(localStorage, {
    hash: function hash(key: any) {
      key = CryptoJS.SHA256(key, this.SECRET_KEY)
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
}
