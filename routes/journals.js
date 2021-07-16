export {
    router
  }
  
  const router = Router()
  
  router.get("/", journalsCtrl.index)
  router.get("/:journalId", journalsCtrl.show)
  router.get("/:id/edit", isLoggedIn, journalsCtrl.edit)
  router.post("/", isLoggedIn, journalsCtrl.create)
  router.put("/:id", isLoggedIn, journalsCtrl.update)
  router.put("/:id/flip-tasty", isLoggedIn, journalsCtrl.flipTasty)
  router.delete("/:id", isLoggedIn, journalsCtrl.delete)