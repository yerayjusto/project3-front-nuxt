export default function (context) {
  if (context.$auth.$state.role !== 'user') context.redirect('/')
}
