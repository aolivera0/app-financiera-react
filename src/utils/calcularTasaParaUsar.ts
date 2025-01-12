export function calcularTasaParaUsar(
    selectedPeriodicidad: string,
    selectedTipoInteres: string,
    tasaInteres: number
  ) {
    let tasaInteresReal: number;
  
    if (selectedPeriodicidad == 'meses') {
      selectedTipoInteres == 'EA'
        ? (tasaInteresReal = (1 + tasaInteres / 100) ** (1 / 12) - 1)
        : selectedTipoInteres == 'diaria'
        ? (tasaInteresReal = (1 + tasaInteres / 100) ** 30 - 1)
        : (tasaInteresReal = tasaInteres / 100);
    } else if (selectedPeriodicidad == 'dias') {
      selectedTipoInteres == 'EA'
        ? (tasaInteresReal = (1 + tasaInteres / 100) ** (1 / 360) - 1)
        : selectedTipoInteres == 'mensual'
        ? (tasaInteresReal = (1 + tasaInteres / 100) ** (1 / 30) - 1)
        : (tasaInteresReal = tasaInteres / 100);
    } else {
      selectedTipoInteres == 'mensual'
        ? (tasaInteresReal = (1 + tasaInteres / 100 / 12) ** 11)
        : selectedTipoInteres == 'diaria'
        ? (tasaInteresReal = (1 + tasaInteres / 100 / 360) ** 359)
        : (tasaInteresReal = tasaInteres / 100);
    }
  
    return tasaInteresReal;
  }
  