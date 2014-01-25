# js utils

utils.js contains a couple of javascript functions that I find useful: classOf
and flatten.

classOf( o ) returns the name of o's class.
flatten( o ) returns a flattened form of o: e.g. if o["a"]["b"]["c"] = 1, then
a flattened o will have o["a.b.c"] = 1.  The spec for flatten in
spec/utils_spec.js should make things clear.
