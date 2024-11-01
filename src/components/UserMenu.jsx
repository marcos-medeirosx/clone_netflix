import React, { useState } from 'react';
import styled from 'styled-components';
import profileIcon from '../assets/iconperfil.jpg';

const UserMenu = ({ onLogout }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <MenuContainer>
            <ProfileIcon onClick={toggleMenu}>
                <img src={profileIcon} alt="Usuário" />
            </ProfileIcon>
            {isOpen && (
                <MenuList>
                    <MenuItem>
                        <UserName>Mariana  Monteiro</UserName>
                    </MenuItem>
                    <MenuItem>
                        <UserName>Luis  Felipe</UserName>
                    </MenuItem>
                    <MenuItem>
                        <UserName>Larissa Teodoro</UserName>
                    </MenuItem>
                    <MenuItem>
                        <UserName>Gabriela  Couto</UserName>
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem>Gerenciar perfis</MenuItem>
                    <MenuItem>Transferir perfil</MenuItem>
                    <MenuItem>Conta</MenuItem>
                    <MenuItem>Central de Ajuda</MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={onLogout}>Sair da Netflix</MenuItem>
                </MenuList>
            )}
        </MenuContainer>
    );
};

export default UserMenu;

const MenuContainer = styled.div`
    position: relative;
    margin-left: auto;
`;

const ProfileIcon = styled.div`
    cursor: pointer;
    img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    }
`;

const MenuList = styled.div`
    position: absolute;
    right: 0;
    width: 250px;
    background-color: rgba(0, 0, 0, 0.75);
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    z-index: 1000;
    margin-top: 10px;
`;

const MenuItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    cursor: pointer;

    &:hover {
    background-color: #e50914;
    }
`;

const UserName = styled.span`
    margin-right: 4px;
`;

const UserSurname = styled.span`
`;

const MenuDivider = styled.hr`
    border: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
`;
