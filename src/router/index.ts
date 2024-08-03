import { Router} from 'express';
import * as apiController from "../controllers/apiController"
const router = Router();

router.get('/',apiController.defaultOne);
router.get('/frases',apiController.getPhrase)
router.get("/frases/:id",apiController.getOnePhrase)
router.post("/frases",apiController.createPhrase)
router.put("/frases/:id",apiController.editPhrase)
router.delete("/frases/:id",apiController.deletePhrase)
router.get("/frase/random",apiController.randomGet)





export default router;
