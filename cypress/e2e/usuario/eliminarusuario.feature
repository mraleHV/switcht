Feature: Eliminarusuario
  Background:
    Given que el usuario se encuentra en el login
    
  Scenario: Eliminar un usuario desde el modulo usuario
    When acceda con sus credenciales de acceso en la plataforma de GHT
    And acceda al modulo de usuario en la plataforma de GHT 
    And seleccione un usuario en la plataforma de GHT
    And haga click en el boton eliminar usuario
    Then la plataforma de GHT debe eliminar el usuario