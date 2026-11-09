import {test} from '@playwright/test'
import { General } from '../lib/General'

test('@smoke-edit employes',async({page})=>{
    const edit=new General(page)
    await edit.openapplication();
    await edit.login();
    await edit.employee();
    await edit.logout();

})


