package stream

import "go.stevenxie.me/api/pkg/zero"

type Streamer interface {
	// Stream returns a single channel of objects
	Stream() <-chan zero.Interface

	//Stops the streamer
	//okay to stop multiple times
	Stop()
}
