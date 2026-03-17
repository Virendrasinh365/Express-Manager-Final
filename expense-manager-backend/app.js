import  express from 'express';


import peopleRoutes  from './src/routes/people.route.js';
import categoryRoutes from './src/routes/category.route.js';
import projectRoutes from './src/routes/project.route.js';
import expenseRoutes from './src/routes/expense.route.js'
import subCategoryRoutes from './src/routes/subCategory.route.js'
import incomeRoutes from './src/routes/income.route.js';
import userRoutes from './src/routes/user.route.js'

const app = express();
app.use(express.json());


app.use('/people',peopleRoutes);
app.use('/category',categoryRoutes);
app.use('/project',projectRoutes)
app.use('/expense',expenseRoutes);
app.use('/subCategory',subCategoryRoutes);
app.use('/income',incomeRoutes)
app.use('/user',userRoutes)

export default app;