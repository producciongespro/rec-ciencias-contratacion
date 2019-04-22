(function(window, undefined) {
  var dictionary = {
    "ec68195d-333f-4180-9581-be49c2093cb2": "Generar documento final",
    "e2a52b27-d835-400e-8f25-f58ccc796c2b": "Entrenamiento idea general",
    "09492ccd-c43f-4387-8c34-6d9d80e2d7cd": "Producción evidencia",
    "6aa36740-6e1f-4df1-bb73-14b9533c0250": "Entrenamiento acción",
    "e1e68fb6-dc28-4977-bea9-0db969d229e9": "Producción argumentación",
    "7e21f884-bfa2-4e1e-a588-dcf6aa5a5696": "Producción idea general",
    "3a924d37-3e52-4374-8db2-1887b367ecea": "Entrenamiento aprendizaje o logro",
    "aebbfb3d-1eab-4473-ab30-e21b610ec11d": "Inicio Recurar contraseña",
    "e898eeae-1a9f-456d-83b3-99b34a681d2f": "Entrenamiento pregunta",
    "e364f8af-c112-4ca9-9f20-277785d49bef": "Inicio Login",
    "07b5649d-49a3-4632-b38a-0cbcff5b943e": "Entrenamiento evidencia",
    "be2c7c71-2cb7-4340-8b7a-d1443c593ab8": "Entrenamiento hallazgo",
    "5a8c8f19-68a5-4ff1-90d0-5d0225e3bf8b": "Inicio Escoger modo",
    "2551331a-7def-4a39-a508-9b02e456762e": "Producción acción",
    "f8aa2a7d-f88f-446e-b225-a9b25968206d": "Entrenamiento manejo de residuos",
    "a5d7cbe5-8e3f-4ef4-986d-b52baa9a9999": "Compartir",
    "47855195-3853-4801-895e-a518124f964c": "Producción suposición",
    "faf2aff4-1c8a-494e-8995-e6177747d644": "Entrenamiento anexo",
    "2e069f90-c206-4fe2-b7e5-afc772a4836d": "Producción una comprobación",
    "e1637265-27a8-49f7-8ad0-b1ceb806226d": "Producción anexo",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Inicio Pantalla carga",
    "c61e4239-c4e5-4aa1-9064-b956ed532ee1": "Producción manejo de residuos",
    "b294c089-524e-430a-80c9-094f711ec64e": "Entrenamiento recurso o material",
    "e3ac77e9-f4db-46a6-a6ae-f5597cf6df7d": "Menu Entrenamiento",
    "3842a349-95d0-4337-85eb-e1efeff847d0": "Producción recurso o material",
    "a37ad1fb-182b-4ba6-a0d9-99650a82e82f": "Menu Producción",
    "b3dc881a-27ce-429f-88bf-e10c67422d06": "Entrenamiento suposición",
    "4a0363bb-8bff-4e09-b579-884fcf48e750": "Entrenamiento Video temática",
    "273c65ec-c1e2-4235-86c7-5833b1b5c094": "Inicio Escoger curso",
    "69655955-60b6-4aae-bf95-d6d62202dc04": "Producción temática",
    "c1366404-0c47-45c6-ac77-614c9b8a078e": "Entrenamiento referencias",
    "6e1938cc-ffeb-45ed-ab10-07947fdb2e93": "Producción referencias",
    "bf712b88-604c-4b65-a764-e5a38720d204": "Entrenamiento referencias2",
    "817d0e99-fa7d-4749-9cf2-2c98b119869f": "Galeria",
    "849af5d2-c9d0-46dd-9729-fb6f19a5dcd1": "Producción aprendizaje o logro",
    "70e1a58e-aea6-4199-96e0-136bb3e89ad1": "Producción referencias2",
    "0387de47-ef5c-4ec8-bd5a-d17724017b9f": "Menu documento final",
    "1dac371f-cd33-47ea-a39d-8722c097d576": "Escoga una comprobación",
    "84d7d831-f0cc-437a-8c75-0133954e581e": "Producción pregunta",
    "988ab6a5-307f-4f6a-adf0-b3bfa607183d": "Inicio video introductorio",
    "cb3d27bf-89c2-4228-b452-e7e1f89d5e4f": "Entrenamiento temática",
    "2cf2ccc5-00d3-485b-8fe7-3ac7f0064ff6": "Entrenamiento argumentación",
    "6abcf944-29c2-4c60-ba35-aa30ff059b92": "Producción hallazgo",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);