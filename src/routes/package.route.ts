import { createLibController, createLibsController, deleteLibController, deleteManyLibController, readLibByPackController, readLibController, updateLibController } from "../controllers/libJsController";
import { createPackageManagerController, deletePackageManagerController, readPackageManagerController, updatePackageManagerController } from "../controllers/packageManagerController";
import libRouter from "./libJsRouter";
import { packageRouter } from "./packageJsRouter";

/**
 * @openapi
 * /package/create:
 *   post:
 *     tags: [PackageManager]
 *     summary: Cria um package manager
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, install]
 *             properties:
 *               name: { type: string }
 *               install: { type: string }
 *     responses:
 *       201: { description: Criado com sucesso }
 */
packageRouter.post('/create', createPackageManagerController);

/**
 * @openapi
 * /package/update/{id}:
 *   put:
 *     tags: [PackageManager]
 *     summary: Atualiza um package manager
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name: { type: string }
 *               install: { type: string }
 *     responses:
 *       200: { description: Atualizado }
 */
packageRouter.put('/update/:id', updatePackageManagerController);

/**
 * @openapi
 * /package/delete/{id}:
 *   delete:
 *     tags: [PackageManager]
 *     summary: Remove um package manager
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Removido }
 *       400: { description: Possui libs associadas }
 */
packageRouter.delete('/delete/:id', deletePackageManagerController);

/**
 * @openapi
 * /package/read:
 *   get:
 *     tags: [PackageManager]
 *     summary: Lista package managers
 *     responses:
 *       200: { description: OK }
 */
packageRouter.get('/read', readPackageManagerController);


/**
 * @openapi
 * /lib/create:
 *   post:
 *     tags: [Lib]
 *     summary: Cria uma lib
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, category, install, packageManagerId]
 *             properties:
 *               name: { type: string }
 *               category: { type: string }
 *               install: { type: string }
 *               dev: { type: string }
 *               packageManagerId: { type: integer }
 *     responses:
 *       201: { description: Criada }
 */
libRouter.post('/create', createLibController);

/**
 * @openapi
 * /lib/bulk:
 *   post:
 *     tags: [Lib]
 *     summary: Cria várias libs
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *     responses:
 *       201: { description: Criadas }
 */
libRouter.post('/bulk', createLibsController);

/**
 * @openapi
 * /lib/update/{id}:
 *   put:
 *     tags: [Lib]
 *     summary: Atualiza uma lib
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Atualizada }
 */
libRouter.put('/update/:id', updateLibController);

/**
 * @openapi
 * /lib/delete/{id}:
 *   delete:
 *     tags: [Lib]
 *     summary: Remove uma lib
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Removida }
 */
libRouter.delete('/delete/:id', deleteLibController);

/**
 * @openapi
 * /lib/bulk/{id}:
 *   delete:
 *     tags: [Lib]
 *     summary: Remove libs por package manager
 *     parameters:
 *       - in: path
 *         name: id
 *         description: packageManagerId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Removidas }
 */
libRouter.delete('/bulk/:id', deleteManyLibController);

/**
 * @openapi
 * /lib/read:
 *   get:
 *     tags: [Lib]
 *     summary: Lista todas as libs
 *     responses:
 *       200: { description: OK }
 */
libRouter.get('/read', readLibController);

/**
 * @openapi
 * /lib/read/{packageManagerId}:
 *   get:
 *     tags: [Lib]
 *     summary: Lista libs por package manager
 *     parameters:
 *       - in: path
 *         name: packageManagerId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: OK }
 */
libRouter.get('/read/:packageManagerId', readLibByPackController);
