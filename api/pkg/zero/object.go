// this package is meant for utility and holds empty data and no-op functions
package zero

// Struct is a struct that holds 0 information
type Struct = struct{}

// Empty returns an empty struct
func Empty() Struct { return struct{}{} }

// Interface says nothing; all objects can use the empty interface
type Interface = interface{}
