(function() {var implementors = {};
implementors["ink_core"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"ink_core/env/struct.Hash.html\" title=\"struct ink_core::env::Hash\">Hash</a>","synthetic":false,"types":["ink_core::env::types::Hash"]},{"text":"impl&lt;T, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;R&gt; for <a class=\"struct\" href=\"ink_core/storage/struct.Value.html\" title=\"struct ink_core::storage::Value\">Value</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;R&gt; + Codec,&nbsp;</span>","synthetic":false,"types":["ink_core::storage::value::Value"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt; for <a class=\"struct\" href=\"ink_core/storage2/collections/boxed/struct.Box.html\" title=\"struct ink_core::storage2::collections::boxed::Box\">StorageBox</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"ink_core/storage2/traits/trait.SpreadLayout.html\" title=\"trait ink_core::storage2::traits::SpreadLayout\">SpreadLayout</a>,&nbsp;</span>","synthetic":false,"types":["ink_core::storage2::collections::boxed::Box"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt; for <a class=\"struct\" href=\"ink_core/storage2/lazy/struct.Lazy.html\" title=\"struct ink_core::storage2::lazy::Lazy\">Lazy</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"ink_core/storage2/traits/trait.SpreadLayout.html\" title=\"trait ink_core::storage2::traits::SpreadLayout\">SpreadLayout</a>,&nbsp;</span>","synthetic":false,"types":["ink_core::storage2::lazy::Lazy"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt; for <a class=\"struct\" href=\"ink_core/storage2/struct.Memory.html\" title=\"struct ink_core::storage2::Memory\">Memory</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"ink_core/storage2/traits/trait.SpreadLayout.html\" title=\"trait ink_core::storage2::traits::SpreadLayout\">SpreadLayout</a>,&nbsp;</span>","synthetic":false,"types":["ink_core::storage2::memory::Memory"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt; for <a class=\"struct\" href=\"ink_core/storage2/struct.Pack.html\" title=\"struct ink_core::storage2::Pack\">Pack</a>&lt;T&gt;","synthetic":false,"types":["ink_core::storage2::pack::Pack"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()