export default function ({ store, redirect }) {
  if (store.state.auth.loggedIn && store.state.auth.user.authorities[0].authority == 'ROLE_USER') {
    return redirect('/')
  }
}
