package music

import "time"

// NowPlayingService is returns info on what's being played
type NowPlayingService interface {
	NowPlaying() (*NowPlaying, error)
}

// NowPlayingStreamingService allows for streaming of the music being played
type NowPlayingStreamingService interface {
	NowPlayingService
	NowPlayingStream() <-chan struct {
		NowPlaying *NowPlaying
		Err        error
	}
}

// NowPlaying stores the information about the music being played
type NowPlaying struct {
	Timestamp time.Time `json:"timestamp"`
	Playing   bool      `json:"playing"`
	Track     *Track    `json:"playing"`
	Progress  int       `json:"progress"`
}
