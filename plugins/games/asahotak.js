// buy the script to get the full code
const _0x3773ff=_0x2d18;(function(_0x33e972,_0x2f030e){const _0x2f89bd=_0x2d18,_0x15720b=_0x33e972();while(!![]){try{const _0x35b40a=-parseInt(_0x2f89bd(0x67))/0x1*(-parseInt(_0x2f89bd(0x9d))/0x2)+-parseInt(_0x2f89bd(0x9e))/0x3*(parseInt(_0x2f89bd(0x6e))/0x4)+parseInt(_0x2f89bd(0x71))/0x5+parseInt(_0x2f89bd(0x95))/0x6*(parseInt(_0x2f89bd(0x83))/0x7)+-parseInt(_0x2f89bd(0x8c))/0x8*(parseInt(_0x2f89bd(0x6a))/0x9)+parseInt(_0x2f89bd(0x81))/0xa*(parseInt(_0x2f89bd(0x80))/0xb)+parseInt(_0x2f89bd(0x7f))/0xc*(-parseInt(_0x2f89bd(0x72))/0xd);if(_0x35b40a===_0x2f030e)break;else _0x15720b['push'](_0x15720b['shift']());}catch(_0xe7047d){_0x15720b['push'](_0x15720b['shift']());}}}(_0x2962,0x6ad87));const _0x1cc9de=(function(){let _0x21abe9=!![];return function(_0x83b673,_0x394984){const _0x12d3de=_0x21abe9?function(){const _0x37d923=_0x2d18;if(_0x394984){const _0x20d7a1=_0x394984[_0x37d923(0x69)](_0x83b673,arguments);return _0x394984=null,_0x20d7a1;}}:function(){};return _0x21abe9=![],_0x12d3de;};}()),_0xe3a4c5=_0x1cc9de(this,function(){const _0x198b5b=_0x2d18;return _0xe3a4c5['toString']()[_0x198b5b(0x77)]('(((.+)+)+)+$')[_0x198b5b(0x88)]()[_0x198b5b(0x93)](_0xe3a4c5)['search']('(((.+)+)+)+$');});function _0x2d18(_0x358b17,_0x297048){const _0x4e88df=_0x2962();return _0x2d18=function(_0xe3a4c5,_0x1cc9de){_0xe3a4c5=_0xe3a4c5-0x67;let _0x2962f7=_0x4e88df[_0xe3a4c5];return _0x2962f7;},_0x2d18(_0x358b17,_0x297048);}_0xe3a4c5();const fetch=require(_0x3773ff(0x94)),similarity=require('similarity');let gamesUrl=_0x3773ff(0x6d),sensitive=0.75,database={},player=0x0;exports[_0x3773ff(0x8f)]={'usage':[_0x3773ff(0x6b)],'category':_0x3773ff(0x98),'async':async(_0x4da6b8,{func:_0x302476,mecha:_0x1daf9c,setting:_0x28a635,isPrem:_0x28126c})=>{const _0x2d6270=_0x3773ff;if(_0x302476['ceklimit'](_0x4da6b8[_0x2d6270(0x78)],0x1))return _0x4da6b8[_0x2d6270(0x91)](global[_0x2d6270(0x7d)][_0x2d6270(0x85)]);if(_0x4da6b8[_0x2d6270(0x7a)]in database)return _0x1daf9c[_0x2d6270(0x91)](_0x4da6b8['chat'],'Masih\x20ada\x20soal\x20belum\x20terjawab\x20di\x20chat\x20ini',database[_0x4da6b8[_0x2d6270(0x7a)]][_0x2d6270(0x7a)]);let _0x46ccb1=await fetch(gamesUrl)['then'](_0x5925ec=>_0x5925ec['json']()),{soal:_0x20ced9,jawaban:_0x392053}=_0x46ccb1[_0x2d6270(0x70)][_0x2d6270(0x76)](),_0x32f905=_0x302476[_0x2d6270(0x82)](_0x28a635[_0x2d6270(0x9c)],_0x28a635[_0x2d6270(0x6c)]),_0x4ca0f8=Date[_0x2d6270(0x8e)](),_0x54604b='*G\x20A\x20M\x20E\x20-\x20A\x20S\x20A\x20H\x20O\x20T\x20A\x20K*\x0a\x0a'+_0x302476[_0x2d6270(0x79)](_0x2d6270(0x9f),_0x20ced9)+'\x0a'+(_0x28126c?_0x2d6270(0x8d)+_0x302476[_0x2d6270(0x79)]('monospace',_0x392053['replace'](/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi,'-')):'')+_0x2d6270(0x74)+_0x32f905+_0x2d6270(0x8b)+_0x28a635[_0x2d6270(0x90)]+_0x2d6270(0x99);player=0x0,database[_0x4da6b8[_0x2d6270(0x7a)]]={'id':_0x4ca0f8,'chat':await _0x1daf9c[_0x2d6270(0x7e)](_0x4da6b8[_0x2d6270(0x7a)],{'text':_0x54604b},{'quoted':_0x4da6b8,'ephemeralExpiration':_0x4da6b8[_0x2d6270(0x8a)]}),'soal':_0x20ced9,'jawaban':_0x392053[_0x2d6270(0x92)](),'hadiah':_0x32f905,'waktu':setTimeout(function(){const _0x2cf99d=_0x2d6270;database[_0x4da6b8['chat']]?.['id']==_0x4ca0f8&&(_0x1daf9c['sendMessage'](_0x4da6b8['chat'],{'text':_0x2cf99d(0x89)+_0x302476['texted'](_0x2cf99d(0x9f),_0x392053)},{'quoted':database[_0x4da6b8[_0x2cf99d(0x7a)]][_0x2cf99d(0x7a)],'ephemeralExpiration':_0x4da6b8[_0x2cf99d(0x8a)]}),delete database[_0x4da6b8[_0x2cf99d(0x7a)]]);},_0x28a635[_0x2d6270(0x90)]*0x3e8)};},'main':async(_0x535594,{func:_0x39417b,mecha:_0x423bf1,setting:_0x4908c3})=>{const _0xe20e25=_0x3773ff;if(_0x535594[_0xe20e25(0x7a)]in database&&!_0x535594[_0xe20e25(0x97)]&&!_0x535594[_0xe20e25(0xa0)]){let {soal:_0x1add3e,jawaban:_0x617b07,hadiah:_0x3d6e92,waktu:_0x3a61eb}=database[_0x535594[_0xe20e25(0x7a)]];if(similarity(_0x617b07,_0x535594[_0xe20e25(0x96)][_0xe20e25(0x92)]())>=sensitive)player++,_0x423bf1[_0xe20e25(0x7e)](_0x535594[_0xe20e25(0x7a)],{'react':{'text':'✅','key':_0x535594[_0xe20e25(0x84)]}}),global['db'][_0xe20e25(0x73)][_0x535594['sender']][_0xe20e25(0x75)]+=_0x3d6e92,global['db'][_0xe20e25(0x73)][_0x535594[_0xe20e25(0x78)]][_0xe20e25(0x87)][_0xe20e25(0x6b)]+=0x1,clearTimeout(_0x3a61eb),delete database[_0x535594[_0xe20e25(0x7a)]],setTimeout(async()=>{const _0x3b738e=_0xe20e25;if(player>0x1)return;if(global['db'][_0x3b738e(0x73)][_0x535594['sender']][_0x3b738e(0x85)]<0x1)return _0x423bf1['reply'](_0x535594[_0x3b738e(0x7a)],_0x3b738e(0x68),_0x535594);global['db']['users'][_0x535594['sender']][_0x3b738e(0x85)]-=0x1;let _0x5a3077=await fetch(gamesUrl)[_0x3b738e(0x86)](_0x4b606d=>_0x4b606d['json']()),{soal:_0x3ba537,jawaban:_0x470797}=_0x5a3077['result'][_0x3b738e(0x76)](),_0x5ccce0=_0x39417b[_0x3b738e(0x82)](_0x4908c3[_0x3b738e(0x9c)],_0x4908c3[_0x3b738e(0x6c)]),_0x2e3be5=Date[_0x3b738e(0x8e)](),_0xc8ad3d=_0x3b738e(0x7b)+_0x39417b[_0x3b738e(0x79)]('monospace',_0x3ba537)+'\x0a'+(global['db']['users'][_0x535594[_0x3b738e(0x78)]][_0x3b738e(0x7c)]?_0x3b738e(0x8d)+_0x39417b['texted'](_0x3b738e(0x9f),_0x470797[_0x3b738e(0x9b)](/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi,'-')):'')+_0x3b738e(0x74)+_0x5ccce0+_0x3b738e(0x8b)+_0x4908c3['gamewaktu']+_0x3b738e(0x99);player=0x0,database[_0x535594['chat']]={'id':_0x2e3be5,'chat':await _0x423bf1[_0x3b738e(0x7e)](_0x535594[_0x3b738e(0x7a)],{'text':_0xc8ad3d},{'quoted':_0x535594,'ephemeralExpiration':_0x535594[_0x3b738e(0x8a)]}),'soal':_0x3ba537,'jawaban':_0x470797[_0x3b738e(0x92)](),'hadiah':_0x5ccce0,'waktu':setTimeout(async function(){const _0x5bfb0=_0x3b738e;database[_0x535594[_0x5bfb0(0x7a)]]?.['id']==_0x2e3be5&&(_0x423bf1['sendMessage'](_0x535594[_0x5bfb0(0x7a)],{'text':_0x5bfb0(0x89)+_0x39417b[_0x5bfb0(0x79)](_0x5bfb0(0x9f),_0x470797)},{'quoted':database[_0x535594[_0x5bfb0(0x7a)]][_0x5bfb0(0x7a)],'ephemeralExpiration':_0x535594[_0x5bfb0(0x8a)]}),delete database[_0x535594[_0x5bfb0(0x7a)]]);},_0x4908c3[_0x3b738e(0x90)]*0x3e8)};},0x3e8);else{if(/conversation|extendedTextMessage/[_0xe20e25(0x9a)](_0x535594[_0xe20e25(0x6f)]))await _0x423bf1[_0xe20e25(0x7e)](_0x535594[_0xe20e25(0x7a)],{'react':{'text':'❌','key':_0x535594[_0xe20e25(0x84)]}});}}}};function _0x2962(){const _0x4938f7=['969298NXSLQd','80GXLAMN','randomNomor','7oXIfET','key','limit','then','game','toString','Waktu\x20habis!\x0a\x0aJawabannya\x20adalah:\x20','expiration','\x20balance\x0aWaktu:\x20','2253752rgjcwy','\x0aPetunjuk:\x20','now','run','gamewaktu','reply','toLowerCase','constructor','node-fetch','3911574srRmOM','budy','fromMe','games','\x20detik','test','replace','bmin','424GWTlhM','723RRBhsy','monospace','isPrefix','188eYvsxT','Soal\x20dihentikan\x20karena\x20limit\x20kamu\x20sudah\x20habis.','apply','9Qdjtvu','asahotak','bmax','https://raw.githubusercontent.com/Jabalsurya2105/database/master/games/asahotak.json','4444jTDsQl','mtype','result','3585075NDufef','2929251TznqVi','users','\x0aHadiah:\x20$','balance','random','search','sender','texted','chat','*LANJUT\x20SOAL\x20BERIKUTNYA*\x0a\x0a','premium','mess','sendMessage','60fitgoQ'];_0x2962=function(){return _0x4938f7;};return _0x2962();}