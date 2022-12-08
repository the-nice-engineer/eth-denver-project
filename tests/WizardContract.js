
const { expect } = require("chai");
const { ethers } = require("hardhat");
  
  describe("Wizard", function () {

    let Wizard, wizard, wizardAddress;

    before(async () => {

      
        Wizard = await ethers.getContractFactory("Wizard");
        wizard = await upgrades.deployProxy(Wizard, [], {
            initializer: "initialize"
        });

        await wizard.deployed();

        wizardAddress = wizard.address;

        [owner, addr1, addr2, addr3, _] = await ethers.getSigners();
    });

  
    describe("Deployment", function () {

        it("Should initialize contract and check default attack.", async function () {

            expect(addr1.address).to.not.equal(await wizard.owner());

            console.log("Wizard Proxy Address: " + wizardAddress);

            expect(await wizard.attack()).to.equal("smoke");
            console.log("*************************************");
            console.log("Attack: " + await wizard.attack());
            console.log("*************************************");
          
        });


        it("Should upgrade to fire wizard.", async function () {


            const WizardFire = await ethers.getContractFactory("WizardFire");
            await upgrades.upgradeProxy(wizardAddress, WizardFire);

            expect(await wizard.attack()).to.equal("fire");
            console.log("*************************************");
            console.log("Attack: " + await wizard.attack());
            console.log("*************************************");
          
        });

    });


});
  