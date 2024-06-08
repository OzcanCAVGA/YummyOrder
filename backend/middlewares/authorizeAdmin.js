async function authorizeAdmin(req, res, next) {
    try {
        if (req.auth && req.auth.authority === 'admin') {
            console.log("AuthorizeAdminIcindeyiz::::", req.auth)
            next() // Kullanici `adminse` devam
        } else {
            console.log("AuthorizeAdminIcindeyiz:::: ama elseee")
            res.status(403).json({ error: 'Yalnızca yöneticiler bu işlemi yapabilir.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Yetkilendirme hatası.' });
    }
}
module.exports = authorizeAdmin;