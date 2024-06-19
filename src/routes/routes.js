import {Router} from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.render('index', {title: 'First Web App', message: 'Welcome to my first web app'});
});

router.get('/about', (req, res) => {
    res.render('about', {title: 'About', message: 'This is a simple web app created with Express and EJS'});
});

router.get('/contact', (req, res) => {
    res.render('contact', {title: 'Contact', message: 'You can contact me at my email address'});
});

export default router;