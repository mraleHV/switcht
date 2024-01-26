Feature: Crearusuario
  Scenario: Crear un usuario desde el modulo usuario
    Given un usuario se encuentra en la plataforma de GHT
    When acceda con sus credenciales en la plataforma de GHT
    And acceda al modulo de crear usuario en la plataforma de GHT 
    And haga click en el boton crear nuevo usuario
    And digite toda la información del usuario
    And haga click sobre el boton guardar
    Then la plataforma de GHT debe crear el usuario