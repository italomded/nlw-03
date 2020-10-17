const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js')

Database.then(async function(db) {
    //inset data on the table
    // await saveOrphanage(db, {
    //     lat: "-10.9171615",
    //     lng: "-37.6891725", 
    //     name: "Lar das meninas",
    //     about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    //     whatsapp: "99999999",
    //     images: [
    //         "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

    //         "https://images.unsplash.com/photo-1529672425113-d3035c7f4837?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

    //         "https://images.unsplash.com/photo-1519308824948-e00cc00057d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

    //         "https://images.unsplash.com/photo-1507036066871-b7e8032b3dea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

    //         "https://images.unsplash.com/photo-1458239920096-bffee8aba36f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

    //         "https://images.unsplash.com/photo-1440288736878-766bd5839edb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    //     ].toString(),
    //     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    //     opening_hours: "Horário de visitas Das 18h até 8h",
    //     open_on_weekends: "0"
    // })

    // query data
    const selected = await db.all("SELECT * FROM orphanages")
    console.log(selected)

    //query data by id
    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    // console.log(orphanage)

    //remove data of label
    // await db.run('DELETE FROM orphanages WHERE id = "4"');
})