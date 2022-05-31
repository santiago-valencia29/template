const variables = {
  backgroundStyle: 'linear-gradient( 135deg, #1A237E 4%, #1d2344 90%)',
  backgroundStyleError: 'linear-gradient( 135deg, #1A237E 4%, #461e1e 90%)',
  confirmButtonColorStyle: '#1A237E',
  deleteButtonColorStyle: '#1d2344',
  confirmButtonColorStyleError: '#8B0000'
}

export const SwalConfig = {
  warningCampos: {
    html: '<h3 style="color:#ffff">Hay campos sin completar</h3>',
    icon: 'warning',
    background: variables.backgroundStyle,
    confirmButtonColor: variables.confirmButtonColorStyle
  },
  warningFileSize: {
    html: '<h3 style="color:#ffff">La imagen a cargar es pesada</h3>',
    icon: 'warning',
    background: variables.backgroundStyle,
    confirmButtonColor: variables.confirmButtonColorStyle
  },
  loadingDesign: {
    showConfirmButton: false,
    allowOutsideClick: false,
    icon: 'info',
    background: variables.backgroundStyle,
    html: '<h3 style="color:#ffff">Espere por favor...</h3>'
  },
  loadingConexion: {
    showConfirmButton: false,
    allowOutsideClick: false,
    icon: 'info',
    background: variables.backgroundStyle,
    html: '<h3 style="color:#ffff">Conectando...</h3>'
  },
  errorConexion: {
    background: variables.backgroundStyleError,
    title: '<h3 style="color:#ffff">Error de conexión</h3>',
    icon: 'error',
    confirmButtonColor: variables.confirmButtonColorStyleError,
    showConfirmButton: true,
    allowOutsideClick: false,
    confirmButtonText: 'Intentar Nuevamente'
  },
  noConexionRedUser: {
    background: variables.backgroundStyle,
    title: '<h3 style="color:#ffff">No tienes conexión a internet</h3>',
    icon: 'error',
    confirmButtonColor: variables.confirmButtonColorStyleError,
    showConfirmButton: true,
    allowOutsideClick: false,
    confirmButtonText: 'Intentar Nuevamente'
  },
  createUser: {
    background: variables.backgroundStyle,
    html: '<h3 style="color:#ffff">Usuario Creado</h3>',
    icon: 'success',
    confirmButtonColor: variables.confirmButtonColorStyle
  },
  updateUser: {
    background: variables.backgroundStyle,
    html: '<h3 style="color:#ffff">Perfil Actualizado</h3>',
    icon: 'success',
    confirmButtonColor: variables.confirmButtonColorStyle
  },
  errorAuth: {
    background: variables.backgroundStyle,
    html: '<h3 style="color:#ffff">No autorizado</h3>',
    icon: 'error',
    confirmButtonColor: variables.confirmButtonColorStyle
  },
  errorRegister: {
    background: '#32383e',
    html: '<h3 style="color:#ffff">Error al guardar</h3>',
    icon: 'error',
    confirmButtonColor: '#3A3F44 '
  },
  createRegister: {
    background: variables.backgroundStyle,
    html: '<h3 style="color:#ffff">Registro creado</h3>',
    icon: 'success',
    confirmButtonColor: variables.confirmButtonColorStyle
  },
  deleteRegister: {
    background: variables.backgroundStyle,
    html: '<h3 style="color:#ffff">Registro eliminado</h3>',
    icon: 'success',
    confirmButtonColor: variables.confirmButtonColorStyle
  },
  deleteRegisters: {
    background: variables.backgroundStyle,
    title: '<h3 style="color:#ffff">Registros eliminados</h3>',
    icon: 'success',
    confirmButtonColor: variables.confirmButtonColorStyle
  },
  updateRegister: {
    background: variables.backgroundStyle,
    html: '<h3 style="color:#ffff">Registro actualizado</h3>',
    icon: 'success',
    confirmButtonColor: variables.confirmButtonColorStyle
  },
  updateRegisterDemo: {
    background: variables.backgroundStyle,
    html: '<h3 style="color:#ffff">Registro actualizado</h3><h2 style="color:#ffff">"Demo"</h2>',
    icon: 'success',
    confirmButtonColor: variables.confirmButtonColorStyle
  },
  QuestionDeleteRegister: {
    background: variables.backgroundStyle,
    html: '<h3 style="color:#ffff">Desea borrarlo?</h3>',
    icon: 'warning',
    showConfirmButton: true,
    confirmButtonText: 'Si',
    showCancelButton: true,
    confirmButtonColor: variables.confirmButtonColorStyle,
    cancelButtonColor: variables.deleteButtonColorStyle,
    cancelButtonText: 'No, cancelar!'
  },
  QuestionDeleteClean: {
    background: variables.backgroundStyle,
    html: '<h3 style="color:#ffff">Desea borrar TODOS los registros asociados a este correo?</h3>',
    icon: 'warning',
    showConfirmButton: true,
    confirmButtonText: 'Si',
    showCancelButton: true,
    confirmButtonColor: variables.confirmButtonColorStyle,
    cancelButtonColor: variables.deleteButtonColorStyle,
    cancelButtonText: 'No, cancelar!'
  },
  QuestionSharedUrlPublic: {
    background: variables.backgroundStyle,
    html: '<h2 style="color:#ffff">Url copiada en el portapapeles</h2><h3 style="color:#ffff">Desea ir a la página compartida?</h3>',
    icon: 'warning',
    showConfirmButton: true,
    confirmButtonText: 'Si',
    showCancelButton: true,
    confirmButtonColor: variables.confirmButtonColorStyle,
    cancelButtonColor: variables.deleteButtonColorStyle,
    cancelButtonText: 'No'
  },
  WarningShareDisabledProducts: {
    background: variables.backgroundStyle,
    html: '<h3 style="color:#ffff">No puede compartir la categoría de productos deshabilitados</h3>',
    icon: 'warning',
    showConfirmButton: true,
    confirmButtonText: 'Ok',
    confirmButtonColor: variables.confirmButtonColorStyle,
    allowOutsideClick: false,
    allowEscapeKey: false
  },
  restringeSite: {
    background: variables.backgroundStyle,
    icon: 'warning',
    html: '<h3 style="color:#ffff">Debe autenticarse</h3>',
    confirmButtonColor: variables.confirmButtonColorStyle
  },
  restringeSiteRol: {
    background: variables.backgroundStyle,
    icon: 'warning',
    html: '<h3 style="color:#ffff">No tiene los permisos para acceder a la ruta.</h3>',
    confirmButtonColor: variables.confirmButtonColorStyle
  },
  QuestionUpdateApp: {
    background: variables.backgroundStyle,
    html: '<h3 style="color:#ffff">Actualización Disponible</h3>',
    icon: 'info',
    showConfirmButton: true,
    confirmButtonText: 'Ok',
    confirmButtonColor: variables.confirmButtonColorStyle,
    allowOutsideClick: false,
    allowEscapeKey: false
  }
}
