let plates = ["B 2432 ABC", "B 1997 GTA", "B 3654 XYZ", "B 1945 GSF", "Udin"]
let date = 24
let isDateEven = date % 2 === 0;

plates.forEach(plate => {
    let digits = plate.replace(/\D/g, "");
    let lastDigit = digits.slice(-1);
    let isPlateEven = lastDigit ? parseInt(lastDigit) % 2 === 0 : null;

    switch (true) {
        case isPlateEven === isDateEven:
          console.log(`${plate} => Boleh melintas`);
          break;
        case isPlateEven !== null:
          console.log(`${plate} => Dilarang melintas`);
          break;
        default:
          console.log(`${plate} => Plat tidak valid`);
      }
});