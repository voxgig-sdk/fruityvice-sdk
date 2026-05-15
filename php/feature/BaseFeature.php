<?php
declare(strict_types=1);

// Fruityvice SDK base feature

class FruityviceBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(FruityviceContext $ctx, array $options): void {}
    public function PostConstruct(FruityviceContext $ctx): void {}
    public function PostConstructEntity(FruityviceContext $ctx): void {}
    public function SetData(FruityviceContext $ctx): void {}
    public function GetData(FruityviceContext $ctx): void {}
    public function GetMatch(FruityviceContext $ctx): void {}
    public function SetMatch(FruityviceContext $ctx): void {}
    public function PrePoint(FruityviceContext $ctx): void {}
    public function PreSpec(FruityviceContext $ctx): void {}
    public function PreRequest(FruityviceContext $ctx): void {}
    public function PreResponse(FruityviceContext $ctx): void {}
    public function PreResult(FruityviceContext $ctx): void {}
    public function PreDone(FruityviceContext $ctx): void {}
    public function PreUnexpected(FruityviceContext $ctx): void {}
}
