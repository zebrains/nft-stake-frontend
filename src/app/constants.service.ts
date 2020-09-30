import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  PRECISION = 1e18;
  YFB_ADDRESS = '0x239e77ea4E60C06F2d6DcC4B08bAF22F11DB2dD1';
  STAKER_ADDRESS = '0x7C7Ecb91913D45c022159909bfE9B5648C83cDf6';
}