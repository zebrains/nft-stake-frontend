import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';
import { ContractService } from '../contract.service';
import { ConstantsService } from '../constants.service';
import BigNumber from 'bignumber.js';

@Component({
  selector: 'app-gems',
  templateUrl: './gems.component.html',
  styleUrls: ['./gems.component.css']
})
export class GemsComponent implements OnInit {
  gemsList: Array<Object>;

  constructor(public wallet: WalletService, public contract: ContractService, public constants: ConstantsService) { 
    this.resetData();
    this.gemsList = [];
  }

  ngOnInit(): void {
    if (this.wallet.connected) {
      this.loadData();
    }
    this.wallet.connectedEvent.subscribe(() => {
      this.loadData();
    });
    this.wallet.errorEvent.subscribe(() => {
      this.resetData();
    });
  }

  async loadData() {
    await this.loadGems();
  }

  async loadGems() {
    let numGems = await this.contract.STAKER.methods.balanceOf(this.wallet.userAddress).call();
    const currBlock = new BigNumber(await this.wallet.web3.eth.getBlockNumber());
    for (let i = 0; i < numGems; i++) {
      let gemId = await this.contract.STAKER.methods.tokenOfOwnerByIndex(this.wallet.userAddress, i).call();
      let gemData = await this.contract.STAKER.methods.rewardRecords(gemId).call();
      gemData["id"] = gemId;
      gemData["amount"] = new BigNumber(gemData["amount"]).div(this.constants.PRECISION);
      const startBlock = new BigNumber(gemData["startBlock"]);
      let endBlock = new BigNumber(gemData["endBlock"]);
      if (endBlock.isLessThan(startBlock)) {
        endBlock = currBlock;
      }
      gemData["img"] = this.mapGem(gemData["amount"]), this.mapGem(gemData["amount"]);
      gemData["duration"] = endBlock.minus(startBlock);
      this.gemsList.push(gemData);
    }
    console.log(this.gemsList);
  }

  mapGem(amount: BigNumber) {
    let id = 0;
    if (amount.isLessThan(new BigNumber(1000))) {
      id = 5;
    }
    if (amount.isLessThan(new BigNumber(100))) {
      id = 4;
    }
    if (amount.isLessThan(new BigNumber(10))) {
      id = 3;
    }
    if (amount.isLessThan(new BigNumber(1))) {
      id = 2;
    }
    if (amount.isLessThan(new BigNumber(0.1))) {
      id = 1;
    }
    return "https://raw.githubusercontent.com/owenshen24/gems/master/assets/gem-" + id + ".gif";
  }

  resetData() {}
}
