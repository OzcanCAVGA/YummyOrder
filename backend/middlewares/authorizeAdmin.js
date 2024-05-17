async function authorizeAdmin(req, res, next) {
    try {
        if (req.user && req.user.authority === 'admin') {
            next() // Kullanici `adminse` devam
        } else {
            res.status(403).json({ error: 'Yalnızca yöneticiler bu işlemi yapabilir.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Yetkilendirme hatası.' });
    }
}
module.exports = authorizeAdmin;