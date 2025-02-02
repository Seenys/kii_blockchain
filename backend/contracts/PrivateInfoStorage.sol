// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PrivateInfoStorage {
    address public owner;
    string private kiiPrivateInfo;
    address[] public whitelist;

    // Dirección obligatoria en la whitelist
    address private constant DEFAULT_WHITELISTED = 0xa36780bee7D53a99672d4e2bf47ff6c7853225c9;

    // Whitelist de direcciones
    

    // Modificador para restringir funciones al propietario
    modifier onlyOwner() {
        require(msg.sender == owner, "Solo el propietario puede ejecutar esta funcion");
        _;
    }

    // Modificador para restringir funciones a direcciones en la whitelist
    modifier onlyWhitelisted() {
        require(isWhitelisted(msg.sender), "No estas en la whitelist");
        _;
    }

    constructor() {
        owner = msg.sender;
        whitelist.push(DEFAULT_WHITELISTED); // Agregar la dirección obligatoria

         // Array de direcciones iniciales para la whitelist
        address[9] memory initialWhitelist = [
            0x3D3A40cBa3Ef5cc620bC580de1eD1246cda7Dba4,
            0x7FAc1ad8d4f84759e64E3F40C9bdE17530C85609,
            0x8Ac44dC60c487FB6CdE46a3C807EAb349FA98537,
            0xa9C18Dc07f70D76C9e5fa431A1f5d23Eaf1ef6B4,
            0x9CBd9C658789feAfB4CC749261485Eb3E36EABC5,
            0x2eac9D76c9F92ae60C06c32fee3e6F1AbD7c5F33,
            0x8fbCd403bF4be1eCC39c4C3a5d61b7ee5B31f435, 
            0x6aC1b7fAc78477dcadb7F86Aa7d4c45ee2e6472B,
            0x4aF7b73Dc5C67e5aFcD37Bc3c1Bc47F3Cd96b758
        ];

        // Agregar las direcciones iniciales a la whitelist
        for (uint i = 0; i < initialWhitelist.length; i++) {
            whitelist.push(initialWhitelist[i]);
        }

    }

    // Función para almacenar información privada (solo propietario)
    function storePrivateInfo(string memory _info) public onlyOwner {
        kiiPrivateInfo = _info;
    }

    // Función para consultar información privada (solo whitelist)
    function getPrivateInfo() public view onlyWhitelisted returns (string memory) {
        return kiiPrivateInfo;
    }

    // Función para agregar direcciones a la whitelist (solo propietario)
    function addToWhitelist(address _address) public onlyOwner {
        require(!isWhitelisted(_address), "La direccion ya esta en la whitelist");
        whitelist.push(_address);
    }

    // Función para verificar si una dirección está en la whitelist
    function isWhitelisted(address _address) public view returns (bool) {
        for (uint i = 0; i < whitelist.length; i++) {
            if (whitelist[i] == _address) {
                return true;
            }
        }
        return false;
    }

    // Función para obtener la lista completa de la whitelist (solo propietario)
    function getWhitelist() public view onlyOwner returns (address[] memory) {
        return whitelist;
    }
}