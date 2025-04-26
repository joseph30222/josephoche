const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Counter", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployCounterContract() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();

    return { counter, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should deploy counter contract", async function () {
      const { counter } = await loadFixture(deployCounterContract);

      expect(await counter.get()).to.equal(0);
    });
    it("Should increment and become 1", async function () {
        const { counter } = await loadFixture(deployCounterContract);
  
        expect(await counter.inc());
        expect(await counter.get()).to.equal(1);
    });
    it("Should increment and become 5", async function () {
        const { counter } = await loadFixture(deployCounterContract);
  
        expect(await counter.inc());
        expect(await counter.inc());
        expect(await counter.inc());
        expect(await counter.inc());
        expect(await counter.inc());
        expect(await counter.get()).to.equal(5);
    });
    it("Should decrement and become 0", async function () {
        const { counter } = await loadFixture(deployCounterContract);
  
        expect(await counter.inc());
        expect(await counter.dec());
        expect(await counter.get()).to.equal(0);
    });
    it("Should decrement and become 4", async function () {
        const { counter } = await loadFixture(deployCounterContract);
  
        expect(await counter.inc());
        expect(await counter.inc());
        expect(await counter.inc());
        expect(await counter.inc());
        expect(await counter.inc());
        expect(await counter.dec());
        expect(await counter.get()).to.equal(4);
    });
  });
});
