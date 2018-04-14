const Thread =  require('../../src/models/Thread');  

const seedThreads = async () =>{

    return await Thread.create([

          {
              title: 'El sistema de matrícula está dañado',
              body: 'bar',
              slug: '', 
          },

          {
              title: 'El problema de transporte en Panamá',
              body: 'bar',
              slug: '',
          },

    ]);
};

module.exports = {
    seedThreads,
  };