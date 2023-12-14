const router = require("express").Router();

const {
  getdata,
  getcasebynumber,
  archive,
  updateContractData,
  insertfolderdata
  } = require("../controllers/folderdata.controller");

  router.get("/getdata/:id", getdata);
  router.post("/InsertFolderData", insertfolderdata);
  router.get("/number/:numeroDossier", getcasebynumber)
  router.put("/archiver", archive);
    router.put("/updateDetails/:numeroDossier",updateContractData)
    module.exports = router;