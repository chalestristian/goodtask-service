import App from './App'
import AppDataSource from './InfraData/Database/database';

App.listen(3000, async() => {
    await AppDataSource.initialize();
    console.log('SERVER STARTED!');
});