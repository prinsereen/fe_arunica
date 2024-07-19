export function formatDataFromApi(apiData) {
    let formattedData = {};

    // Lakukan iterasi terhadap data API
    apiData.forEach(item => {
        const material = item.material.material;

        // Cek apakah sudah ada section dengan sectionTitle yang sesuai
        if (!formattedData[material]) {
            // Jika belum ada, buat baru
            formattedData[material] = {
                sectionTitle: material,
                url: [],
                label: []
            };
        }

        // Tambahkan URL ke dalam array URL yang sesuai dengan sectionTitle
        formattedData[material].url.push(item.url);

        // Misalkan label diambil dari judul video
        formattedData[material].label.push(item.judul);
    });

    // Konversi objek menjadi array of objects (sesuai dengan format sectionCard)
    const formattedArray = Object.values(formattedData).map(item => ({ card: item }));

    return formattedArray;
}