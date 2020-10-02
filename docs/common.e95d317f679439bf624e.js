(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"36aJ":function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return a}));var r=function(e){var n=e.currentWallet,t=e.selectedWallet;return n?'\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    We have detected that you already have\n    <b>'.concat(n,"</b>\n    installed. If you would prefer to use\n    <b>").concat(t,'</b>\n    instead, then click below to install.\n    </p>\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    <b>Tip:</b>\n    If you already have ').concat(t,' installed, check your\n    browser extension settings to make sure that you have it enabled\n    and that you have disabled any other browser extension wallets.\n    <span\n      class="bn-onboard-clickable"\n      style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;"\n      onclick="window.location.reload();">\n      Then refresh the page.\n    </span>\n    </p>\n    '):'\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    You\'ll need to install <b>'.concat(t,'</b> to continue. Once you have it installed, go ahead and\n    <span\n    class="bn-onboard-clickable"\n      style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;"\n      onclick={window.location.reload();}>\n      refresh the page.\n    </span>\n    ').concat("Opera"===t?'<br><br><i>Hint: If you already have Opera installed, make sure that your web3 wallet is <a style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;" class="bn-onboard-clickable" href="https://help.opera.com/en/touch/crypto-wallet/" rel="noreferrer noopener" target="_blank">enabled</a></i>':"","\n    </p>\n    ")},a=function(e){var n=e.selectedWallet;return'\n  <p style="font-size: 0.889rem;">\n    You\'ll need to install <b>'.concat(n,"</b> to continue. Click below to install and then load this Dapp with <b>").concat(n,"</b>.\n  </p>\n  ")}},qPxQ:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return l})),t.d(n,"c",(function(){return d})),t.d(n,"d",(function(){return c})),t.d(n,"e",(function(){return u}));var r={},a={},o=function(e,n){a[e]=n},i=function(e){var n=function(n,t){Object.assign(this,t),this.name=e,this.message=n||e,this.stack=(new Error).stack};return n.prototype=new Error,r[e]=n,n};i("AccountNameRequired"),i("AccountNotSupported"),i("AmountRequired"),i("BluetoothRequired"),i("BtcUnmatchedApp"),i("CantOpenDevice"),i("CashAddrNotSupported"),i("CurrencyNotSupported"),i("DeviceAppVerifyNotSupported"),i("DeviceGenuineSocketEarlyClose"),i("DeviceNotGenuine"),i("DeviceOnDashboardExpected"),i("DeviceOnDashboardUnexpected"),i("DeviceInOSUExpected"),i("DeviceHalted"),i("DeviceNameInvalid"),i("DeviceSocketFail"),i("DeviceSocketNoBulkStatus"),i("DisconnectedDevice"),i("DisconnectedDeviceDuringOperation"),i("EnpointConfig");var s=i("EthAppPleaseEnableContractData"),c=(i("FeeEstimationFailed"),i("FirmwareNotRecognized"),i("HardResetFail"),i("InvalidXRPTag"),i("InvalidAddress"),i("InvalidAddressBecauseDestinationIsAlsoSource"),i("LatestMCUInstalledError"),i("UnknownMCU"),i("LedgerAPIError"),i("LedgerAPIErrorWithMessage"),i("LedgerAPINotAvailable"),i("ManagerAppAlreadyInstalled"),i("ManagerAppRelyOnBTC"),i("ManagerAppDepInstallRequired"),i("ManagerAppDepUninstallRequired"),i("ManagerDeviceLocked"),i("ManagerFirmwareNotEnoughSpace"),i("ManagerNotEnoughSpace"),i("ManagerUninstallBTCDep"),i("NetworkDown"),i("NoAddressesFound"),i("NotEnoughBalance"),i("NotEnoughBalanceToDelegate"),i("NotEnoughBalanceInParentAccount"),i("NotEnoughSpendableBalance"),i("NotEnoughBalanceBecauseDestinationNotCreated"),i("NoAccessToCamera"),i("NotEnoughGas"),i("NotSupportedLegacyAddress"),i("GasLessThanEstimate"),i("PasswordsDontMatch"),i("PasswordIncorrect"),i("RecommendSubAccountsToEmpty"),i("RecommendUndelegation"),i("TimeoutTagged"),i("UnexpectedBootloader"),i("MCUNotGenuineToDashboard"),i("RecipientRequired"),i("UnavailableTezosOriginatedAccountReceive"),i("UnavailableTezosOriginatedAccountSend"),i("UpdateFetchFileFail"),i("UpdateIncorrectHash"),i("UpdateIncorrectSig"),i("UpdateYourApp"),i("UserRefusedDeviceNameChange"),i("UserRefusedAddress"),i("UserRefusedFirmwareUpdate"),i("UserRefusedAllowManager"),i("UserRefusedOnDevice"),i("TransportOpenUserCancelled"),i("TransportInterfaceNotAvailable"),i("TransportRaceCondition"));function d(e,n){this.name="TransportError",this.message=e,this.stack=(new Error).stack,this.id=n}i("TransportWebUSBGestureRequired"),i("DeviceShouldStayInApp"),i("WebsocketConnectionError"),i("WebsocketConnectionFailed"),i("WrongDeviceForAccount"),i("WrongAppForCurrency"),i("ETHAddressNonEIP"),i("CantScanQRCode"),i("FeeNotLoaded"),i("FeeRequired"),i("FeeTooHigh"),i("SyncError"),i("PairingFailed"),i("GenuineCheckFailed"),i("LedgerAPI4xx"),i("LedgerAPI5xx"),i("FirmwareOrAppUpdateRequired"),i("NoDBPathGiven"),i("DBWrongPassword"),i("DBNotReset"),d.prototype=new Error,o("TransportError",(function(e){return new d(e.message,e.id)}));var l={PIN_REMAINING_ATTEMPTS:25536,INCORRECT_LENGTH:26368,MISSING_CRITICAL_PARAMETER:26624,COMMAND_INCOMPATIBLE_FILE_STRUCTURE:27009,SECURITY_STATUS_NOT_SATISFIED:27010,CONDITIONS_OF_USE_NOT_SATISFIED:27013,INCORRECT_DATA:27264,NOT_ENOUGH_MEMORY_SPACE:27268,REFERENCED_DATA_NOT_FOUND:27272,FILE_ALREADY_EXISTS:27273,INCORRECT_P1_P2:27392,INS_NOT_SUPPORTED:27904,CLA_NOT_SUPPORTED:28160,TECHNICAL_PROBLEM:28416,OK:36864,MEMORY_PROBLEM:37440,NO_EF_SELECTED:37888,INVALID_OFFSET:37890,FILE_NOT_FOUND:37892,INCONSISTENT_FILE:37896,ALGORITHM_NOT_SUPPORTED:38020,INVALID_KCV:38021,CODE_NOT_INITIALIZED:38914,ACCESS_CONDITION_NOT_FULFILLED:38916,CONTRADICTION_SECRET_CODE_STATUS:38920,CONTRADICTION_INVALIDATION:38928,CODE_BLOCKED:38976,MAX_VALUE_REACHED:38992,GP_AUTH_FAILED:25344,LICENSING:28482,HALTED:28586};function u(e){this.name="TransportStatusError";var n=Object.keys(l).find((function(n){return l[n]===e}))||"UNKNOWN_ERROR",t=function(e){switch(e){case 26368:return"Incorrect length";case 26624:return"Missing critical parameter";case 27010:return"Security not satisfied (dongle locked or have invalid access rights)";case 27013:return"Condition of use not satisfied (denied by the user?)";case 27264:return"Invalid data received";case 27392:return"Invalid parameter received"}if(28416<=e&&e<=28671)return"Internal error, please report"}(e)||n,r=e.toString(16);this.message="Ledger device: "+t+" (0x"+r+")",this.stack=(new Error).stack,this.statusCode=e,this.statusText=n}u.prototype=new Error,o("TransportStatusError",(function(e){return new u(e.statusCode)}))}}]);