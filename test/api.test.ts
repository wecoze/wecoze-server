//
//           _                        
//           \`*-.                    
//            )  _`-.                 
//           .  : `. .                
//           : _   '  \               
//           ; *` _.   `*-._          
//           `-.-'          `-.       
//             ;       `       `.     
//             :.       .        \    
//             . \  .   :   .-'   .   
//             '  `+.;  ;  '      :   
//             :  '  |    ;       ;-. 
//             ; '   : :`-:     _.`* ;
//    [bug] .*' /  .*' ; .*`- +'  `*' 
//          `*-*   `*-*  `*-*'  
// 
// Created by kk on 2018/3/28.
//

import 'mocha'
import { expect } from 'chai'
import api from '../src/api'
import * as request from 'request-promise-native'
import { run_server } from './util/run_server'

run_server(api)
describe('api', () => {
  it('should be ok', async () => {
    const res = await request('http://api.wecoze-server.local/v1', {json: true})
    expect(res).deep.eq({res: {message: 'Bonjour'}})
  })
})