const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

describe("SimpleStorage", function () {
  let simpleStorageFactory, simpleStorage;
  beforeEach(async function () {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
  });

  it("Should start with a favourite number of 0", async function () {
    const currentValue = await simpleStorage.retrieve();
    const expectedValue = "0";

    assert.equal(currentValue.toString(), expectedValue);
  });

  it("Should update when we call store", async function () {
    // you call use .only after the it like it.only to run only thst particular test
    // you can also use "yarn hardhat test --grep store" => particular key one
    const expectedValue = "4";
    const updateValue = await simpleStorage.store(expectedValue);
    await updateValue.wait(1);
    const currentValue = await simpleStorage.retrieve();
    assert.equal(expectedValue, currentValue.toString());
  });

  it("Should add person", async function () {
    // expectedValue = "Dre";
    const updateValue = await simpleStorage.addPerson("Dre", 5);
    await updateValue.wait(1);
  });
});
