package stream

import "jordandde/api/pkg/zero"

// Streamer is an interface that allows for streaming of any object
type Streamer interface {
	// Stream returns a single channel of objects
	Stream() <-chan zero.Interface

	//Stops the streamer
	//okay to stop multiple times
	Stop()
}
