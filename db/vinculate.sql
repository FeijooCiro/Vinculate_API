-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-11-2023 a las 19:45:54
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `vinculate`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `apellidoestudiante`
--

CREATE TABLE `apellidoestudiante` (
  `idApellidoEstudiante` int(11) NOT NULL,
  `apellEstudiante` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `areapuesto`
--

CREATE TABLE `areapuesto` (
  `idAreaPuesto` int(11) NOT NULL,
  `areaTrabajo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calle`
--

CREATE TABLE `calle` (
  `idCalle` int(11) NOT NULL,
  `numCalle` int(11) NOT NULL,
  `idNombreCalle` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compania`
--

CREATE TABLE `compania` (
  `idCompania` int(11) NOT NULL,
  `nombreComp` varchar(255) NOT NULL,
  `razonSocial` varchar(255) NOT NULL,
  `descripcionCompania` text NOT NULL,
  `numTelefono` varchar(20) NOT NULL,
  `idServicio` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso`
--

CREATE TABLE `curso` (
  `idCurso` int(11) NOT NULL,
  `descCurso` text NOT NULL,
  `idNombreCurso` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especialidad`
--

CREATE TABLE `especialidad` (
  `idEspecialidad` int(11) NOT NULL,
  `nomEspecialidad` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especialidad_institucion`
--

CREATE TABLE `especialidad_institucion` (
  `idEspecialidadInstitucion` int(11) NOT NULL,
  `idEspecialidad` int(11) NOT NULL,
  `idInstitucionETP` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiantepostulado`
--

CREATE TABLE `estudiantepostulado` (
  `idEstudiantePostulado` int(11) NOT NULL,
  `dni` int(11) NOT NULL,
  `anioEgreso` int(11) NOT NULL,
  `idNombreEstudiante` int(11) NOT NULL,
  `idApellidoEstudiante` int(11) NOT NULL,
  `idTituloEgreso` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiante_curso`
--

CREATE TABLE `estudiante_curso` (
  `idEstudianteCurso` int(11) NOT NULL,
  `idEstudiantePostulado` int(11) NOT NULL,
  `idCurso` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiante_explaboral`
--

CREATE TABLE `estudiante_explaboral` (
  `idEstudianteExpLaboral` int(11) NOT NULL,
  `idEstudiantePostulado` int(11) NOT NULL,
  `idExperienciaLaboral` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiante_institucion`
--

CREATE TABLE `estudiante_institucion` (
  `idEstudianteInstitucion` int(11) NOT NULL,
  `idEstudiantePostulado` int(11) NOT NULL,
  `idInstitucionETP` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `experiencialaboral`
--

CREATE TABLE `experiencialaboral` (
  `idExperienciaLaboral` int(11) NOT NULL,
  `descExpLaboral` text NOT NULL,
  `idNombreExpLaboral` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `institucionetp`
--

CREATE TABLE `institucionetp` (
  `idInstitucionETP` int(11) NOT NULL,
  `cue` varchar(20) NOT NULL,
  `tipoEducacion` enum('Secundaria','Tecnica','EPS','Formacion Profesional','Tecnicatura Superior') NOT NULL,
  `descInstitucion` text NOT NULL,
  `idNombreInstitucion` int(11) NOT NULL,
  `idUbicacion` int(11) NOT NULL,
  `idTituloInstitucion` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `localidad`
--

CREATE TABLE `localidad` (
  `idLocalidad` int(11) NOT NULL,
  `nomLocalidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nombrecalle`
--

CREATE TABLE `nombrecalle` (
  `idNombreCalle` int(11) NOT NULL,
  `nomCalle` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nombrecurso`
--

CREATE TABLE `nombrecurso` (
  `idNombreCurso` int(11) NOT NULL,
  `nomCurso` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nombreestudiante`
--

CREATE TABLE `nombreestudiante` (
  `idNombreEstudiante` int(11) NOT NULL,
  `nomEstudiante` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nombreexplaboral`
--

CREATE TABLE `nombreexplaboral` (
  `idNombreExpLaboral` int(11) NOT NULL,
  `nomExpLaboral` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nombreinstitucion`
--

CREATE TABLE `nombreinstitucion` (
  `idNombreInstitucion` int(11) NOT NULL,
  `nomInstitucion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nombreofertaformativa`
--

CREATE TABLE `nombreofertaformativa` (
  `idTituloOfertaFormativa` int(11) NOT NULL,
  `nomOfertaFormativa` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nombreofertalaboral`
--

CREATE TABLE `nombreofertalaboral` (
  `idTituloOferta` int(11) NOT NULL,
  `tituloOferta` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nombrepuesto`
--

CREATE TABLE `nombrepuesto` (
  `idNombrePuesto` int(11) NOT NULL,
  `nomPuesto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nombreredsocial`
--

CREATE TABLE `nombreredsocial` (
  `idNombreRedSocial` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nombreservicio`
--

CREATE TABLE `nombreservicio` (
  `idNombreServicio` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nombretituloacademico`
--

CREATE TABLE `nombretituloacademico` (
  `idNombreTitulo` int(11) NOT NULL,
  `nomTitulo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ofertaformativa`
--

CREATE TABLE `ofertaformativa` (
  `idOfertaFormativa` int(11) NOT NULL,
  `descOfertaFormativa` int(11) NOT NULL,
  `idTituloOfertaFormativa` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ofertaformativa_estudiante`
--

CREATE TABLE `ofertaformativa_estudiante` (
  `idEstudianteOfertaFormativa` int(11) NOT NULL,
  `tipoEducacion` enum('Secundaria','Tecnica','EPS','Formacion Profesional','Tecnicatura Superior') NOT NULL,
  `idOfertaFormativa` int(11) NOT NULL,
  `idEstudiantePostulado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ofertaformativa_institucion`
--

CREATE TABLE `ofertaformativa_institucion` (
  `idOfertaFormativaInstitucion` int(11) NOT NULL,
  `idOfertaFormativa` int(11) NOT NULL,
  `idInstitucionETP` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ofertalaboral`
--

CREATE TABLE `ofertalaboral` (
  `idOfertaLaboral` int(11) NOT NULL,
  `descOferta` text NOT NULL,
  `cantHoras` int(11) NOT NULL,
  `idTituloOferta` int(11) NOT NULL,
  `idZonaIncumbencia` int(11) NOT NULL,
  `idPuestoLaboral` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ofertalaboral_compania`
--

CREATE TABLE `ofertalaboral_compania` (
  `idOfertaCompania` int(11) NOT NULL,
  `idOfertaLaboral` int(11) NOT NULL,
  `idCompania` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincia`
--

CREATE TABLE `provincia` (
  `idProvincia` int(11) NOT NULL,
  `nomProvincia` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puestolaboral`
--

CREATE TABLE `puestolaboral` (
  `idPuestoLaboral` int(11) NOT NULL,
  `descPuesto` text NOT NULL,
  `estadoPuesto` enum('disponible','cubierto') NOT NULL,
  `modalidadTrabajo` enum('presencial','virtual','mixta') NOT NULL,
  `idNombrePuesto` int(11) NOT NULL,
  `idAreaPuesto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `redsocial`
--

CREATE TABLE `redsocial` (
  `idRedSocial` int(11) NOT NULL,
  `link` varchar(255) NOT NULL,
  `idNombreRedSocial` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `red_compania`
--

CREATE TABLE `red_compania` (
  `idRedCompania` int(11) NOT NULL,
  `idCompania` int(11) NOT NULL,
  `idRedSocial` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio`
--

CREATE TABLE `servicio` (
  `idServicio` int(11) NOT NULL,
  `descripcionServicio` text NOT NULL,
  `idNombreServicio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tituloacademico_institucion`
--

CREATE TABLE `tituloacademico_institucion` (
  `idTituloAcademicoInstitucion` int(11) NOT NULL,
  `idTituloInstitucion` int(11) NOT NULL,
  `idInstitucionETP` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tituloegreso`
--

CREATE TABLE `tituloegreso` (
  `idTituloEgreso` int(11) NOT NULL,
  `nomTituloEgreso` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tituloinstitucion`
--

CREATE TABLE `tituloinstitucion` (
  `idTituloInstitucion` int(11) NOT NULL,
  `descTitulo` text NOT NULL,
  `idNombreTitulo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ubicacion`
--

CREATE TABLE `ubicacion` (
  `idUbicacion` int(11) NOT NULL,
  `codPostal` int(11) NOT NULL,
  `idProvincia` int(11) NOT NULL,
  `idLocalidad` int(11) NOT NULL,
  `idCalle` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `correoElectrónico` varchar(255) NOT NULL,
  `contrasenia` varchar(255) NOT NULL,
  `fechaPerfilCreacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zonaincumbencia`
--

CREATE TABLE `zonaincumbencia` (
  `idZonaIncumbencia` int(11) NOT NULL,
  `nombreZona` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `apellidoestudiante`
--
ALTER TABLE `apellidoestudiante`
  ADD PRIMARY KEY (`idApellidoEstudiante`);

--
-- Indices de la tabla `areapuesto`
--
ALTER TABLE `areapuesto`
  ADD PRIMARY KEY (`idAreaPuesto`);

--
-- Indices de la tabla `calle`
--
ALTER TABLE `calle`
  ADD PRIMARY KEY (`idCalle`),
  ADD KEY `idNombreCalle` (`idNombreCalle`);

--
-- Indices de la tabla `compania`
--
ALTER TABLE `compania`
  ADD PRIMARY KEY (`idCompania`),
  ADD UNIQUE KEY `nombreComp` (`nombreComp`),
  ADD UNIQUE KEY `razonSocial` (`razonSocial`),
  ADD UNIQUE KEY `numTelefono` (`numTelefono`),
  ADD KEY `idServicio` (`idServicio`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indices de la tabla `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`idCurso`),
  ADD KEY `idNombreCurso` (`idNombreCurso`);

--
-- Indices de la tabla `especialidad`
--
ALTER TABLE `especialidad`
  ADD PRIMARY KEY (`idEspecialidad`);

--
-- Indices de la tabla `especialidad_institucion`
--
ALTER TABLE `especialidad_institucion`
  ADD PRIMARY KEY (`idEspecialidadInstitucion`),
  ADD KEY `idEspecialidad` (`idEspecialidad`),
  ADD KEY `idInstitucionETP` (`idInstitucionETP`);

--
-- Indices de la tabla `estudiantepostulado`
--
ALTER TABLE `estudiantepostulado`
  ADD PRIMARY KEY (`idEstudiantePostulado`),
  ADD KEY `idNombreEstudiante` (`idNombreEstudiante`),
  ADD KEY `idApellidoEstudiante` (`idApellidoEstudiante`),
  ADD KEY `idTituloEgreso` (`idTituloEgreso`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indices de la tabla `estudiante_curso`
--
ALTER TABLE `estudiante_curso`
  ADD PRIMARY KEY (`idEstudianteCurso`),
  ADD KEY `idEstudiantePostulado` (`idEstudiantePostulado`),
  ADD KEY `idCurso` (`idCurso`);

--
-- Indices de la tabla `estudiante_explaboral`
--
ALTER TABLE `estudiante_explaboral`
  ADD PRIMARY KEY (`idEstudianteExpLaboral`),
  ADD KEY `idEstudiantePostulado` (`idEstudiantePostulado`),
  ADD KEY `idExperienciaLaboral` (`idExperienciaLaboral`);

--
-- Indices de la tabla `estudiante_institucion`
--
ALTER TABLE `estudiante_institucion`
  ADD PRIMARY KEY (`idEstudianteInstitucion`),
  ADD KEY `idEstudiantePostulado` (`idEstudiantePostulado`),
  ADD KEY `idInstitucionETP` (`idInstitucionETP`);

--
-- Indices de la tabla `experiencialaboral`
--
ALTER TABLE `experiencialaboral`
  ADD PRIMARY KEY (`idExperienciaLaboral`),
  ADD KEY `idNombreExpLaboral` (`idNombreExpLaboral`);

--
-- Indices de la tabla `institucionetp`
--
ALTER TABLE `institucionetp`
  ADD PRIMARY KEY (`idInstitucionETP`),
  ADD KEY `idNombreInstitucion` (`idNombreInstitucion`),
  ADD KEY `idUbicacion` (`idUbicacion`),
  ADD KEY `idTituloInstitucion` (`idTituloInstitucion`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indices de la tabla `localidad`
--
ALTER TABLE `localidad`
  ADD PRIMARY KEY (`idLocalidad`);

--
-- Indices de la tabla `nombrecalle`
--
ALTER TABLE `nombrecalle`
  ADD PRIMARY KEY (`idNombreCalle`);

--
-- Indices de la tabla `nombrecurso`
--
ALTER TABLE `nombrecurso`
  ADD PRIMARY KEY (`idNombreCurso`);

--
-- Indices de la tabla `nombreestudiante`
--
ALTER TABLE `nombreestudiante`
  ADD PRIMARY KEY (`idNombreEstudiante`);

--
-- Indices de la tabla `nombreexplaboral`
--
ALTER TABLE `nombreexplaboral`
  ADD PRIMARY KEY (`idNombreExpLaboral`);

--
-- Indices de la tabla `nombreinstitucion`
--
ALTER TABLE `nombreinstitucion`
  ADD PRIMARY KEY (`idNombreInstitucion`);

--
-- Indices de la tabla `nombreofertaformativa`
--
ALTER TABLE `nombreofertaformativa`
  ADD PRIMARY KEY (`idTituloOfertaFormativa`);

--
-- Indices de la tabla `nombreofertalaboral`
--
ALTER TABLE `nombreofertalaboral`
  ADD PRIMARY KEY (`idTituloOferta`);

--
-- Indices de la tabla `nombrepuesto`
--
ALTER TABLE `nombrepuesto`
  ADD PRIMARY KEY (`idNombrePuesto`);

--
-- Indices de la tabla `nombreredsocial`
--
ALTER TABLE `nombreredsocial`
  ADD PRIMARY KEY (`idNombreRedSocial`);

--
-- Indices de la tabla `nombreservicio`
--
ALTER TABLE `nombreservicio`
  ADD PRIMARY KEY (`idNombreServicio`);

--
-- Indices de la tabla `nombretituloacademico`
--
ALTER TABLE `nombretituloacademico`
  ADD PRIMARY KEY (`idNombreTitulo`);

--
-- Indices de la tabla `ofertaformativa`
--
ALTER TABLE `ofertaformativa`
  ADD PRIMARY KEY (`idOfertaFormativa`),
  ADD KEY `idTituloOfertaFormativa` (`idTituloOfertaFormativa`);

--
-- Indices de la tabla `ofertaformativa_estudiante`
--
ALTER TABLE `ofertaformativa_estudiante`
  ADD PRIMARY KEY (`idEstudianteOfertaFormativa`),
  ADD KEY `idOfertaFormativa` (`idOfertaFormativa`),
  ADD KEY `idEstudiantePostulado` (`idEstudiantePostulado`);

--
-- Indices de la tabla `ofertaformativa_institucion`
--
ALTER TABLE `ofertaformativa_institucion`
  ADD PRIMARY KEY (`idOfertaFormativaInstitucion`),
  ADD KEY `idOfertaFormativa` (`idOfertaFormativa`),
  ADD KEY `idInstitucionETP` (`idInstitucionETP`);

--
-- Indices de la tabla `ofertalaboral`
--
ALTER TABLE `ofertalaboral`
  ADD PRIMARY KEY (`idOfertaLaboral`),
  ADD KEY `idTituloOferta` (`idTituloOferta`),
  ADD KEY `idZonaIncumbencia` (`idZonaIncumbencia`),
  ADD KEY `idPuestoLaboral` (`idPuestoLaboral`);

--
-- Indices de la tabla `ofertalaboral_compania`
--
ALTER TABLE `ofertalaboral_compania`
  ADD PRIMARY KEY (`idOfertaCompania`),
  ADD KEY `idOfertaLaboral` (`idOfertaLaboral`),
  ADD KEY `idCompania` (`idCompania`);

--
-- Indices de la tabla `provincia`
--
ALTER TABLE `provincia`
  ADD PRIMARY KEY (`idProvincia`);

--
-- Indices de la tabla `puestolaboral`
--
ALTER TABLE `puestolaboral`
  ADD PRIMARY KEY (`idPuestoLaboral`),
  ADD KEY `idNombrePuesto` (`idNombrePuesto`),
  ADD KEY `idAreaPuesto` (`idAreaPuesto`);

--
-- Indices de la tabla `redsocial`
--
ALTER TABLE `redsocial`
  ADD PRIMARY KEY (`idRedSocial`),
  ADD KEY `idNombreRedSocial` (`idNombreRedSocial`);

--
-- Indices de la tabla `red_compania`
--
ALTER TABLE `red_compania`
  ADD PRIMARY KEY (`idRedCompania`),
  ADD KEY `idCompania` (`idCompania`),
  ADD KEY `idRedSocial` (`idRedSocial`);

--
-- Indices de la tabla `servicio`
--
ALTER TABLE `servicio`
  ADD PRIMARY KEY (`idServicio`),
  ADD KEY `idNombreServicio` (`idNombreServicio`);

--
-- Indices de la tabla `tituloacademico_institucion`
--
ALTER TABLE `tituloacademico_institucion`
  ADD PRIMARY KEY (`idTituloAcademicoInstitucion`),
  ADD KEY `idTituloInstitucion` (`idTituloInstitucion`),
  ADD KEY `idInstitucionETP` (`idInstitucionETP`);

--
-- Indices de la tabla `tituloegreso`
--
ALTER TABLE `tituloegreso`
  ADD PRIMARY KEY (`idTituloEgreso`);

--
-- Indices de la tabla `tituloinstitucion`
--
ALTER TABLE `tituloinstitucion`
  ADD PRIMARY KEY (`idTituloInstitucion`),
  ADD KEY `idNombreTitulo` (`idNombreTitulo`);

--
-- Indices de la tabla `ubicacion`
--
ALTER TABLE `ubicacion`
  ADD PRIMARY KEY (`idUbicacion`),
  ADD KEY `idProvincia` (`idProvincia`),
  ADD KEY `idLocalidad` (`idLocalidad`),
  ADD KEY `idCalle` (`idCalle`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`);

--
-- Indices de la tabla `zonaincumbencia`
--
ALTER TABLE `zonaincumbencia`
  ADD PRIMARY KEY (`idZonaIncumbencia`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `apellidoestudiante`
--
ALTER TABLE `apellidoestudiante`
  MODIFY `idApellidoEstudiante` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `areapuesto`
--
ALTER TABLE `areapuesto`
  MODIFY `idAreaPuesto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `calle`
--
ALTER TABLE `calle`
  MODIFY `idCalle` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `compania`
--
ALTER TABLE `compania`
  MODIFY `idCompania` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `curso`
--
ALTER TABLE `curso`
  MODIFY `idCurso` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `especialidad`
--
ALTER TABLE `especialidad`
  MODIFY `idEspecialidad` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `especialidad_institucion`
--
ALTER TABLE `especialidad_institucion`
  MODIFY `idEspecialidadInstitucion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `estudiantepostulado`
--
ALTER TABLE `estudiantepostulado`
  MODIFY `idEstudiantePostulado` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `estudiante_curso`
--
ALTER TABLE `estudiante_curso`
  MODIFY `idEstudianteCurso` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `estudiante_explaboral`
--
ALTER TABLE `estudiante_explaboral`
  MODIFY `idEstudianteExpLaboral` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `estudiante_institucion`
--
ALTER TABLE `estudiante_institucion`
  MODIFY `idEstudianteInstitucion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `experiencialaboral`
--
ALTER TABLE `experiencialaboral`
  MODIFY `idExperienciaLaboral` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `institucionetp`
--
ALTER TABLE `institucionetp`
  MODIFY `idInstitucionETP` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `localidad`
--
ALTER TABLE `localidad`
  MODIFY `idLocalidad` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `nombrecalle`
--
ALTER TABLE `nombrecalle`
  MODIFY `idNombreCalle` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `nombrecurso`
--
ALTER TABLE `nombrecurso`
  MODIFY `idNombreCurso` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `nombreestudiante`
--
ALTER TABLE `nombreestudiante`
  MODIFY `idNombreEstudiante` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `nombreexplaboral`
--
ALTER TABLE `nombreexplaboral`
  MODIFY `idNombreExpLaboral` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `nombreinstitucion`
--
ALTER TABLE `nombreinstitucion`
  MODIFY `idNombreInstitucion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `nombreofertaformativa`
--
ALTER TABLE `nombreofertaformativa`
  MODIFY `idTituloOfertaFormativa` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `nombreofertalaboral`
--
ALTER TABLE `nombreofertalaboral`
  MODIFY `idTituloOferta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `nombrepuesto`
--
ALTER TABLE `nombrepuesto`
  MODIFY `idNombrePuesto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `nombreredsocial`
--
ALTER TABLE `nombreredsocial`
  MODIFY `idNombreRedSocial` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `nombreservicio`
--
ALTER TABLE `nombreservicio`
  MODIFY `idNombreServicio` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `nombretituloacademico`
--
ALTER TABLE `nombretituloacademico`
  MODIFY `idNombreTitulo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ofertaformativa`
--
ALTER TABLE `ofertaformativa`
  MODIFY `idOfertaFormativa` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ofertaformativa_estudiante`
--
ALTER TABLE `ofertaformativa_estudiante`
  MODIFY `idEstudianteOfertaFormativa` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ofertaformativa_institucion`
--
ALTER TABLE `ofertaformativa_institucion`
  MODIFY `idOfertaFormativaInstitucion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ofertalaboral`
--
ALTER TABLE `ofertalaboral`
  MODIFY `idOfertaLaboral` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ofertalaboral_compania`
--
ALTER TABLE `ofertalaboral_compania`
  MODIFY `idOfertaCompania` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `provincia`
--
ALTER TABLE `provincia`
  MODIFY `idProvincia` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `puestolaboral`
--
ALTER TABLE `puestolaboral`
  MODIFY `idPuestoLaboral` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `redsocial`
--
ALTER TABLE `redsocial`
  MODIFY `idRedSocial` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `red_compania`
--
ALTER TABLE `red_compania`
  MODIFY `idRedCompania` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `servicio`
--
ALTER TABLE `servicio`
  MODIFY `idServicio` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tituloacademico_institucion`
--
ALTER TABLE `tituloacademico_institucion`
  MODIFY `idTituloAcademicoInstitucion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tituloegreso`
--
ALTER TABLE `tituloegreso`
  MODIFY `idTituloEgreso` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tituloinstitucion`
--
ALTER TABLE `tituloinstitucion`
  MODIFY `idTituloInstitucion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ubicacion`
--
ALTER TABLE `ubicacion`
  MODIFY `idUbicacion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `zonaincumbencia`
--
ALTER TABLE `zonaincumbencia`
  MODIFY `idZonaIncumbencia` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `calle`
--
ALTER TABLE `calle`
  ADD CONSTRAINT `calle_ibfk_1` FOREIGN KEY (`idNombreCalle`) REFERENCES `nombrecalle` (`idNombreCalle`);

--
-- Filtros para la tabla `compania`
--
ALTER TABLE `compania`
  ADD CONSTRAINT `compania_ibfk_1` FOREIGN KEY (`idServicio`) REFERENCES `servicio` (`idServicio`),
  ADD CONSTRAINT `compania_ibfk_3` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`);

--
-- Filtros para la tabla `curso`
--
ALTER TABLE `curso`
  ADD CONSTRAINT `curso_ibfk_1` FOREIGN KEY (`idNombreCurso`) REFERENCES `nombrecurso` (`idNombreCurso`);

--
-- Filtros para la tabla `especialidad_institucion`
--
ALTER TABLE `especialidad_institucion`
  ADD CONSTRAINT `especialidad_institucion_ibfk_1` FOREIGN KEY (`idEspecialidad`) REFERENCES `especialidad` (`idEspecialidad`),
  ADD CONSTRAINT `especialidad_institucion_ibfk_2` FOREIGN KEY (`idInstitucionETP`) REFERENCES `institucionetp` (`idInstitucionETP`);

--
-- Filtros para la tabla `estudiantepostulado`
--
ALTER TABLE `estudiantepostulado`
  ADD CONSTRAINT `estudiantepostulado_ibfk_1` FOREIGN KEY (`idNombreEstudiante`) REFERENCES `nombreestudiante` (`idNombreEstudiante`),
  ADD CONSTRAINT `estudiantepostulado_ibfk_2` FOREIGN KEY (`idApellidoEstudiante`) REFERENCES `apellidoestudiante` (`idApellidoEstudiante`),
  ADD CONSTRAINT `estudiantepostulado_ibfk_3` FOREIGN KEY (`idTituloEgreso`) REFERENCES `tituloegreso` (`idTituloEgreso`),
  ADD CONSTRAINT `estudiantepostulado_ibfk_4` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`);

--
-- Filtros para la tabla `estudiante_curso`
--
ALTER TABLE `estudiante_curso`
  ADD CONSTRAINT `estudiante_curso_ibfk_1` FOREIGN KEY (`idCurso`) REFERENCES `curso` (`idCurso`),
  ADD CONSTRAINT `estudiante_curso_ibfk_2` FOREIGN KEY (`idEstudiantePostulado`) REFERENCES `estudiantepostulado` (`idEstudiantePostulado`);

--
-- Filtros para la tabla `estudiante_explaboral`
--
ALTER TABLE `estudiante_explaboral`
  ADD CONSTRAINT `estudiante_explaboral_ibfk_1` FOREIGN KEY (`idEstudiantePostulado`) REFERENCES `estudiantepostulado` (`idEstudiantePostulado`),
  ADD CONSTRAINT `estudiante_explaboral_ibfk_2` FOREIGN KEY (`idExperienciaLaboral`) REFERENCES `experiencialaboral` (`idExperienciaLaboral`);

--
-- Filtros para la tabla `estudiante_institucion`
--
ALTER TABLE `estudiante_institucion`
  ADD CONSTRAINT `estudiante_institucion_ibfk_1` FOREIGN KEY (`idEstudiantePostulado`) REFERENCES `estudiantepostulado` (`idEstudiantePostulado`),
  ADD CONSTRAINT `estudiante_institucion_ibfk_2` FOREIGN KEY (`idInstitucionETP`) REFERENCES `institucionetp` (`idInstitucionETP`);

--
-- Filtros para la tabla `experiencialaboral`
--
ALTER TABLE `experiencialaboral`
  ADD CONSTRAINT `experiencialaboral_ibfk_1` FOREIGN KEY (`idNombreExpLaboral`) REFERENCES `nombreexplaboral` (`idNombreExpLaboral`);

--
-- Filtros para la tabla `institucionetp`
--
ALTER TABLE `institucionetp`
  ADD CONSTRAINT `institucionetp_ibfk_1` FOREIGN KEY (`idNombreInstitucion`) REFERENCES `nombreinstitucion` (`idNombreInstitucion`),
  ADD CONSTRAINT `institucionetp_ibfk_4` FOREIGN KEY (`idUbicacion`) REFERENCES `ubicacion` (`idUbicacion`),
  ADD CONSTRAINT `institucionetp_ibfk_5` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`);

--
-- Filtros para la tabla `ofertaformativa`
--
ALTER TABLE `ofertaformativa`
  ADD CONSTRAINT `ofertaformativa_ibfk_1` FOREIGN KEY (`idTituloOfertaFormativa`) REFERENCES `nombreofertaformativa` (`idTituloOfertaFormativa`);

--
-- Filtros para la tabla `ofertaformativa_estudiante`
--
ALTER TABLE `ofertaformativa_estudiante`
  ADD CONSTRAINT `ofertaformativa_estudiante_ibfk_1` FOREIGN KEY (`idOfertaFormativa`) REFERENCES `ofertaformativa` (`idOfertaFormativa`),
  ADD CONSTRAINT `ofertaformativa_estudiante_ibfk_2` FOREIGN KEY (`idEstudiantePostulado`) REFERENCES `estudiantepostulado` (`idEstudiantePostulado`);

--
-- Filtros para la tabla `ofertaformativa_institucion`
--
ALTER TABLE `ofertaformativa_institucion`
  ADD CONSTRAINT `ofertaformativa_institucion_ibfk_1` FOREIGN KEY (`idOfertaFormativa`) REFERENCES `ofertaformativa` (`idOfertaFormativa`),
  ADD CONSTRAINT `ofertaformativa_institucion_ibfk_2` FOREIGN KEY (`idInstitucionETP`) REFERENCES `institucionetp` (`idInstitucionETP`);

--
-- Filtros para la tabla `ofertalaboral`
--
ALTER TABLE `ofertalaboral`
  ADD CONSTRAINT `ofertalaboral_ibfk_1` FOREIGN KEY (`idTituloOferta`) REFERENCES `nombreofertalaboral` (`idTituloOferta`),
  ADD CONSTRAINT `ofertalaboral_ibfk_2` FOREIGN KEY (`idZonaIncumbencia`) REFERENCES `zonaincumbencia` (`idZonaIncumbencia`),
  ADD CONSTRAINT `ofertalaboral_ibfk_3` FOREIGN KEY (`idPuestoLaboral`) REFERENCES `puestolaboral` (`idPuestoLaboral`);

--
-- Filtros para la tabla `ofertalaboral_compania`
--
ALTER TABLE `ofertalaboral_compania`
  ADD CONSTRAINT `ofertalaboral_compania_ibfk_1` FOREIGN KEY (`idCompania`) REFERENCES `compania` (`idCompania`),
  ADD CONSTRAINT `ofertalaboral_compania_ibfk_2` FOREIGN KEY (`idOfertaLaboral`) REFERENCES `ofertalaboral` (`idOfertaLaboral`);

--
-- Filtros para la tabla `puestolaboral`
--
ALTER TABLE `puestolaboral`
  ADD CONSTRAINT `puestolaboral_ibfk_1` FOREIGN KEY (`idAreaPuesto`) REFERENCES `areapuesto` (`idAreaPuesto`),
  ADD CONSTRAINT `puestolaboral_ibfk_2` FOREIGN KEY (`idNombrePuesto`) REFERENCES `nombrepuesto` (`idNombrePuesto`);

--
-- Filtros para la tabla `redsocial`
--
ALTER TABLE `redsocial`
  ADD CONSTRAINT `redsocial_ibfk_1` FOREIGN KEY (`idNombreRedSocial`) REFERENCES `nombreredsocial` (`idNombreRedSocial`);

--
-- Filtros para la tabla `red_compania`
--
ALTER TABLE `red_compania`
  ADD CONSTRAINT `red_compania_ibfk_1` FOREIGN KEY (`idCompania`) REFERENCES `compania` (`idCompania`),
  ADD CONSTRAINT `red_compania_ibfk_2` FOREIGN KEY (`idRedSocial`) REFERENCES `redsocial` (`idRedSocial`);

--
-- Filtros para la tabla `servicio`
--
ALTER TABLE `servicio`
  ADD CONSTRAINT `servicio_ibfk_1` FOREIGN KEY (`idNombreServicio`) REFERENCES `nombreservicio` (`idNombreServicio`);

--
-- Filtros para la tabla `tituloacademico_institucion`
--
ALTER TABLE `tituloacademico_institucion`
  ADD CONSTRAINT `tituloacademico_institucion_ibfk_1` FOREIGN KEY (`idInstitucionETP`) REFERENCES `institucionetp` (`idInstitucionETP`),
  ADD CONSTRAINT `tituloacademico_institucion_ibfk_2` FOREIGN KEY (`idTituloInstitucion`) REFERENCES `tituloinstitucion` (`idTituloInstitucion`);

--
-- Filtros para la tabla `tituloinstitucion`
--
ALTER TABLE `tituloinstitucion`
  ADD CONSTRAINT `tituloinstitucion_ibfk_1` FOREIGN KEY (`idNombreTitulo`) REFERENCES `nombretituloacademico` (`idNombreTitulo`);

--
-- Filtros para la tabla `ubicacion`
--
ALTER TABLE `ubicacion`
  ADD CONSTRAINT `ubicacion_ibfk_1` FOREIGN KEY (`idProvincia`) REFERENCES `provincia` (`idProvincia`),
  ADD CONSTRAINT `ubicacion_ibfk_2` FOREIGN KEY (`idLocalidad`) REFERENCES `localidad` (`idLocalidad`),
  ADD CONSTRAINT `ubicacion_ibfk_3` FOREIGN KEY (`idCalle`) REFERENCES `calle` (`idCalle`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
