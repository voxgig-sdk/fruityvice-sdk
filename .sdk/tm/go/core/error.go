package core

type FruityviceError struct {
	IsFruityviceError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewFruityviceError(code string, msg string, ctx *Context) *FruityviceError {
	return &FruityviceError{
		IsFruityviceError: true,
		Sdk:              "Fruityvice",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *FruityviceError) Error() string {
	return e.Msg
}
