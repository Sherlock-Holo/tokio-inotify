(function() {var implementors = {};
implementors["lazycell"] = ["impl&lt;T:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='lazycell/struct.AtomicLazyCell.html' title='lazycell::AtomicLazyCell'>AtomicLazyCell</a>&lt;T&gt;",];implementors["slab"] = ["impl&lt;T,&nbsp;I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='slab/struct.Slab.html' title='slab::Slab'>Slab</a>&lt;T,&nbsp;I&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a></span>",];implementors["void"] = ["impl&lt;'a,&nbsp;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec_deque/struct.Drain.html' title='collections::vec_deque::Drain'>Drain</a>&lt;'a,&nbsp;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a></span>","impl !<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/select/struct.Select.html' title='std::sync::mpsc::select::Select'>Select</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/struct.Receiver.html' title='std::sync::mpsc::Receiver'>Receiver</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/struct.Sender.html' title='std::sync::mpsc::Sender'>Sender</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/struct.SyncSender.html' title='std::sync::mpsc::SyncSender'>SyncSender</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mutex/struct.Mutex.html' title='std::sync::mutex::Mutex'>Mutex</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;'a,&nbsp;T&gt; !<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mutex/struct.MutexGuard.html' title='std::sync::mutex::MutexGuard'>MutexGuard</a>&lt;'a,&nbsp;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/once/struct.Once.html' title='std::sync::once::Once'>Once</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/rwlock/struct.RwLock.html' title='std::sync::rwlock::RwLock'>RwLock</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> + ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;'a,&nbsp;T&gt; !<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/rwlock/struct.RwLockReadGuard.html' title='std::sync::rwlock::RwLockReadGuard'>RwLockReadGuard</a>&lt;'a,&nbsp;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;'a,&nbsp;T&gt; !<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/rwlock/struct.RwLockWriteGuard.html' title='std::sync::rwlock::RwLockWriteGuard'>RwLockWriteGuard</a>&lt;'a,&nbsp;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; !<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/rc/struct.Rc.html' title='alloc::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; !<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/rc/struct.Weak.html' title='alloc::rc::Weak'>Weak</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.IntoIter.html' title='collections::vec::IntoIter'>IntoIter</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a></span>","impl&lt;'a,&nbsp;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Drain.html' title='collections::vec::Drain'>Drain</a>&lt;'a,&nbsp;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a></span>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.Drain.html' title='collections::string::Drain'>Drain</a>&lt;'a&gt;",];implementors["libc"] = [];implementors["futures"] = ["impl&lt;A:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='futures/task/struct.TaskRc.html' title='futures::task::TaskRc'>TaskRc</a>&lt;A&gt;",];implementors["mio"] = ["impl&lt;'a,&nbsp;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec_deque/struct.Drain.html' title='collections::vec_deque::Drain'>Drain</a>&lt;'a,&nbsp;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a></span>","impl !<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/select/struct.Select.html' title='std::sync::mpsc::select::Select'>Select</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/struct.Receiver.html' title='std::sync::mpsc::Receiver'>Receiver</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/struct.Sender.html' title='std::sync::mpsc::Sender'>Sender</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/struct.SyncSender.html' title='std::sync::mpsc::SyncSender'>SyncSender</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mutex/struct.Mutex.html' title='std::sync::mutex::Mutex'>Mutex</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;'a,&nbsp;T&gt; !<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mutex/struct.MutexGuard.html' title='std::sync::mutex::MutexGuard'>MutexGuard</a>&lt;'a,&nbsp;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/once/struct.Once.html' title='std::sync::once::Once'>Once</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/rwlock/struct.RwLock.html' title='std::sync::rwlock::RwLock'>RwLock</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> + ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;'a,&nbsp;T&gt; !<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/rwlock/struct.RwLockReadGuard.html' title='std::sync::rwlock::RwLockReadGuard'>RwLockReadGuard</a>&lt;'a,&nbsp;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;'a,&nbsp;T&gt; !<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/rwlock/struct.RwLockWriteGuard.html' title='std::sync::rwlock::RwLockWriteGuard'>RwLockWriteGuard</a>&lt;'a,&nbsp;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; !<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/rc/struct.Rc.html' title='alloc::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; !<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/rc/struct.Weak.html' title='alloc::rc::Weak'>Weak</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.IntoIter.html' title='collections::vec::IntoIter'>IntoIter</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a></span>","impl&lt;'a,&nbsp;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Drain.html' title='collections::vec::Drain'>Drain</a>&lt;'a,&nbsp;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a></span>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.Drain.html' title='collections::string::Drain'>Drain</a>&lt;'a&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='mio/struct.Registration.html' title='mio::Registration'>Registration</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='mio/struct.SetReadiness.html' title='mio::SetReadiness'>SetReadiness</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
